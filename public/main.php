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
//                        print_r($row);
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
                            echo json_encode($row);
                        }else{
                            ErrorMessage('No match user');
                        }
                    } else {
                        ErrorMessage('Database request error');
                    }
                }


                break;
        }
    }
}