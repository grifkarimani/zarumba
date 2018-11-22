<?
// isset — Определяет, была ли установлена переменная значением, отличным от NULL
// $dataArr - переменная
// json_decode() -Принимает закодированную в JSON строку и преобразует ее в переменную PHP
if(isset($_POST)){
    $dataArr = json_decode($_POST['data']); 
    $dataArr = json_decode(json_encode($dataArr), true);
    if(isset($dataArr['operation'])){
        function ErrorMessage($text){
            $arr = [];
            $arr['status'] = 'ERROR';
            $arr['message'] = $text;
            echo json_encode($arr);
        }
        function Success($data){
            $arr = [];
            $arr['status'] = 'OK';
            $arr['message'] = "";
            $arr['data'] = $data;

            echo json_encode($arr);
        }
        function randomPassword($length) {
            $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            $pass = [];
            $alphaLength = strlen($alphabet) - 1;
            for ($i = 0; $i < $length; $i++) {
                $n = rand(0, $alphaLength);
                $pass[] = $alphabet[$n];
            }
            return implode($pass);
        }

        function SendNewPassword($email, $pass){
            $to = $email;
            $subject = 'Новый пароль';
            $message = '
            <h3>Новый пароль:</h3>
            <table>
                <tbody>
                    <tr>
                        <td style="padding: 5px 10px; background-color: #dad8d8;"><b>Пароль:</b></td>
                        <td style="padding: 5px 10px; background-color: #767f8c; color: #fff;">'.$pass.'</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px 10px; background-color: #dad8d8;"><b>Сменить пароль можно в личном кабинете :)</b></td>
                    </tr>
                </tbody>
            </table>
        ';
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From: Zarumba <kirstarovoitov@yandex.ru>\r\n";
            if(mail($to, $subject, $message, $headers)){
                return true;
            }else return false;
        }


        $sqlLink = mysqli_connect("localhost", "root", "", "zarumba");
        if (mysqli_connect_errno()) {
            echo 'Не удалось подключиться к базе данных';
            exit();
        }
        switch($dataArr['operation']){

            case 'registration':
                if(isset($dataArr['name']) && trim($dataArr['name']) !== '' && isset($dataArr['email']) && trim($dataArr['email']) !== '' && isset($dataArr['pass']) && trim($dataArr['pass']) !== '' && isset($dataArr['confirmPass']) && trim($dataArr['confirmPass']) !== '' && trim($dataArr['confirmPass']) == trim($dataArr['pass'])){
                    $name = trim($dataArr['name']);
                    $email = trim($dataArr['email']);
                    $pass = trim($dataArr['pass']);
                    if ($result = mysqli_query($sqlLink, "SELECT `id` FROM `players` WHERE `email`='$email'")){
                        if(isset($result->num_rows) && (int)$result->num_rows){
                            ErrorMessage('User exists');
                        }else{
                            if ($user = mysqli_query($sqlLink, "INSERT INTO `players` SET `name`='$name', `email`='$email', `password`='$pass'")){
                                Success("Success");
                            }else{
                                ErrorMessage('No inserted');
                            }
                        }
                    }
                }
                break;
            case 'login':
                if(isset($dataArr['email']) && trim($dataArr['email']) !== '' && isset($dataArr['pass']) && trim($dataArr['pass']) !== '' ){
                    $email = trim($dataArr['email']);
                    $pass = trim($dataArr['pass']);
                    $result = mysqli_query($sqlLink, "SELECT * FROM `players` WHERE `email`='$email' AND `password`='$pass' ");
                    if ($result){
                        $row = $result->fetch_array(MYSQLI_ASSOC);
                        if(count($row)){
                            $row["status"] = "OK";
                            echo json_encode($row);
                        }else{
                            ErrorMessage('No match user');
                        }
                    } else {
                        ErrorMessage('Database request error');
                    }
                }
                break;



            case 'pass-recovery':
                if(isset($dataArr['email']) && trim($dataArr['email']) !== ''){
                    $email = trim($dataArr['email']);
                    $result = mysqli_query($sqlLink, "SELECT * FROM `players` WHERE `email`='$email'");
                    if ($result){
                        $row = $result->fetch_array(MYSQLI_ASSOC);
                        if(count($row)){
                            $newPass = randomPassword(10);
                            $userID = $row['id'];
                            $email = $row['email'];
                            if ($insert2 = mysqli_query($sqlLink, "UPDATE `players` SET password='$newPass' WHERE id='$userID'")){
                                if(SendNewPassword($email, $newPass)){
                                    Success("Success");
                                }else{
                                    ErrorMessage('Not sent');
                                }
                            }
                        }else{
                            ErrorMessage('No match user');
                        }
                    } else {
                        ErrorMessage('Database request error');
                    }
                }
//kvstarovoitov@itertech.by

                break;
        }
    }
}