<?
// isset — Определяет, была ли установлена переменная значением, отличным от NULL
// $dataArr - переменная
// json_decode() -Принимает закодированную в JSON строку и преобразует ее в переменную PHP
if(isset($_POST)){
    $dataArr = json_decode($_POST['data']); 
    $dataArr = json_decode(json_encode($dataArr), true);
    if(isset($dataArr['operation'])){




        switch($dataArr['operation']){

            case 'registration':
                if(isset($dataArr['name']) && trim($dataArr['name']) !== '' && isset($dataArr['email']) && trim($dataArr['email']) !== '' && isset($dataArr['pass']) && trim($dataArr['pass']) !== '' && isset($dataArr['confirmPass']) && trim($dataArr['confirmPass']) !== '' && trim($dataArr['confirmPass']) == trim($dataArr['pass'])){
                    $sqlLink = mysqli_connect("localhost", "root", "", "zarumba");
                    if (mysqli_connect_errno()) {
                        echo 'Не удалось подключиться к базе данных';
                        exit();
                    }
                    $name = trim($dataArr['name']);
                    $email = trim($dataArr['email']);
                    $pass = trim($dataArr['pass']);
                    $userExist = false;
                    if ($result = mysqli_query($sqlLink, "SELECT `id` FROM `players` WHERE `email`='$email'")){
                        if(isset($result->num_rows) && (int)$result->num_rows){
                            echo 'user_mail_exist';
                        }else{
                            if ($user = mysqli_query($sqlLink, "INSERT INTO `players` SET `name`='$name', `email`='$email', `password`='$pass'")){
                                echo 'ok';
                            }else{
                                echo 'error';
                            }
                        }
                    }
                }
                break;
            case 'login':
                
                break;
        }
    }

    
}