<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords"
          content="unique login form,leamug login form,boostrap login form,responsive login form,free css html login form,download login form">
    <meta name="author" content="leamug">
    <title>{{ env('APP_NAME') }} - Registration</title>
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}" /> 
    <link href="css/style.css" rel="stylesheet" id="style">
    <!-- Bootstrap core Library -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <!-- Font Awesome-->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <style type="text/css">
        /*author:starttemplate*/
/*reference site : starttemplate.com*/
body {
  background-image:url('https://i.redd.it/o8dlfk93azs31.jpg');
  background-position:center;
  background-size:cover;
  
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
  font-family: 'Dancing Script', cursive!important;
}

.container {
    padding: 110px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ffffff!important;
    opacity: 1; /* Firefox */
    font-size:18px!important;
}
.form-login {
    background-color: rgba(0,0,0,0.55);
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    color:white;
    box-shadow:0 1px 0 #cfcfcf;
}
.form-control{
    background:transparent!important;
    color:white!important;
    font-size: 18px!important;
}
h1{
    color:white!important;
}
h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}
.text-white{
    color: white!important;
}
.wrapper {
    text-align: center;
}
.footer p{
    font-size: 18px;
}
    </style>

</head>
<body>

<!-- Page Content -->
<div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-4 text-center">
            <h1 class='text-white'>Unique Login Form</h1>
              <div class="form-login"></br>
                <h4>Secure Login</h4>
                </br>

                <form method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                        @csrf


                        <div class="form-group">                    
                            <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }} form-control-lg" name="name" value="{{ old('name') }}" placeholder="Name" required autofocus>
        
                            @if ($errors->has('name'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">                    
                            <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }} form-control-lg" name="email" value="{{ old('email') }}" placeholder="Email" required autofocus>
        
                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>


                        <div class="form-group">                    
                            <input id="phone" type="phone" maxlength="10" class="form-control{{ $errors->has('phone') ? ' is-invalid' : '' }} form-control-lg" name="phone" value="{{ old('phone') }}" placeholder="Phone" required autofocus>
        
                            @if ($errors->has('phone'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('phone') }}</strong>
                                </span>
                            @endif
                        </div>


                        <div class="form-group">                    
                            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }} form-control-lg" name="password" value="{{ old('password') }}" placeholder="Password" required autofocus>
        
                            @if ($errors->has('password'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">                    
                            <input id="password-confirm" type="password" class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }} form-control-lg" name="password_confirmation" value="{{ old('password_confirmation') }}" placeholder="Confirm Password" required autofocus>
        
                            @if ($errors->has('password_confirmation'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password_confirmation') }}</strong>
                                </span>
                            @endif
                        </div>
                        
                        <div class="form-group">                    
                            <input id="referral" type="phone" maxlength="10" class="form-control{{ $errors->has('referral') ? ' is-invalid' : '' }} form-control-lg" name="referral" value="{{ old('referral') }}" placeholder="Referral Code" autofocus>
        
                            
                        </div>

                        <div class="mt-3">
                            <button class="btn btn-danger btn-md">Sign Up <i class="fa fa-sign-in"></i></button>
                        </div>
                          
                    </form>
                








                <!-- <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username"/>
                </br></br>
                <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password"/>
                </br></br> -->
                <!-- <div class="wrapper">
                        <span class="group-btn">
                            <a href="#" class="btn btn-danger btn-md">login <i class="fa fa-sign-in"></i></a>
                        </span>
                </div> -->
            </div>
        </div>
    </div>
    </br></br></br>
    <!--footer-->
    <div class="footer text-white text-center">
        <p>© 2020 Unique Login Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
    </div>
    <!--//footer-->
</div>
<script type="text/javascript">
    function showMyToast($type , $message) {
        bootoast.toast({ message: $message, type: $type, position: 'bottom-center' });
    }
    @if (Session::has('success'))
        showMyToast("success","{{ Session::get('success') }}"); 
    @endif
    @if (Session::has('error'))
        showMyToast("error","{{ Session::get('error') }}"); 
    @endif
</script>
    @yield('customjs')

</body>
</html>