<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="{{ $website->title }}">
  <meta name="author" content="{{ $website->title }}">
  <title>{{ $website->title }} - Login</title>
  <link rel="icon" type="image/x-icon" href="{{ $website->logo }}" />
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link href="{{ asset('theme/css/sb-admin-2.css') }}" rel="stylesheet">
</head>

<body class="bg-gradient-sky">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-8 offset-2">
                  <div class="text-center mt-5">
                        @if(env('SHOW_LOGIN_LOGO'))
                            <img src="{{ $website->logo }}" alt="{{ $website->title }}" style="    height: 200px;width:200px">
                        @else
                            <h3>{{ $website->title }}</h3>
                        @endif
                    <br><br>
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>

                    <form class="user" method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                      @csrf
                    <div class="form-group">
                      <input type="text" class="form-control form-control-user" name="email" value="{{ old('email') }}" maxlength="10" 
                      onkeypress="return isNumber(event)" placeholder="Mobile" autocomplete="off" autofocus  required>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" placeholder="Password" name="password" value="{{ old('password') }}">
                    </div>
                    @if($errors)
                        <div class="text-center text-danger">{{ $errors->first('password') }}</div>
                    @endif
                    <button type="submit" class="btn btn-primary  btn-block">Login Your Account</button><hr>
                    </form>
                    <div class="text-center mb-5">
                        <a href="{{ route('get:forgot_password')}}">Forgot Password?</a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="{{ asset('theme/vendor/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('theme/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('theme/vendor/jquery-easing/jquery.easing.min.js') }}"></script>
  <script src="{{ asset('theme/js/sb-admin-2.min.js') }}"></script>
  <script type="text/javascript">
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}
        return true;
    }
    </script>
</body>
</html>