<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>{{ env('APP_NAME') }} - Distributor Registration</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('theme/img/favicon.png') }}" />
    <link href="{{ asset('theme/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link href="{{ asset('theme/css/sb-admin-2.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/bootstrap-datepicker3.min.css') }}" rel="stylesheet" >
    <script src="{{ asset('theme/vendor/jquery/jquery.min.js') }}"></script>
    <link href="{{ asset('assets/css/bootoast.css') }}" rel="stylesheet" >
    <script src="{{ asset('assets/js/bootoast.js') }}"></script>
      <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">-->
      <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>-->
      <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>-->
</head>

<body class="bg-gradient-primary0">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
             
                <div class="col-lg-8 offset-2">
                    <div class="text-center mt-5">
                        <img src="{{ asset('theme/img/logo.png') }}"><br><br>
                        <h1 class="h4 text-gray-900 mb-4">Forgot Password</h1>
                    </div>

                    <form class="user mt-5" method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                        @csrf
                        <div class="form-group">
                            <input  class="form-control" name="mobile" id="mobile" type="text" maxlength="10" placeholder="Mobile" onkeypress="return isNumber(event)"
                            autocomplete="off" autofocus value="{{ old('mobile') }}" required>
                        </div>
                        
                        <div class="otp-section" style="display:none;">
                            <div class="form-group">
                                <input  class="form-control" name="otp" id="otp" type="text" maxlength="6" placeholder="OTP" onkeypress="return isNumber(event)"  
                                autocomplete="off" autofocus value="{{ old('otp') }}" required>
                            </div>
                        </div>

                        <div class="div">
               		   		<span class="error phone-error"></span>
               		    </div>
       		   
                    	<input type="button" class="btn btn-primary btn-block send-btn"  value="Send">
                    	<input type="button" class="btn btn-primary btn-block verify-btn"  value="Verify" style="display:none;"><hr>
            	
                        <!--<button type="submit" class="btn btn-primary  btn-block">Login</button> <hr>-->
                        
                        </form>
                  
                        <div class="text-center mb-5">
                            <!--<a href="{{ route('get:distributor_registration')}}">Distributor Registration</a><br>-->
                            <a href="{{ url('') }}">Already have an account?</a>
                        </div>
                  </div>



     
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="{{ asset('theme/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('theme/vendor/jquery-easing/jquery.easing.min.js') }}"></script>
  <script src="{{ asset('theme/js/sb-admin-2.min.js') }}"></script>
  <script src="{{ asset('assets/js/bootstrap-datepicker.js') }}"></script>
  <script type="text/javascript">
  
    $(document).on('click', '.send-btn', function () {
        var mobile = $('#mobile').val();
        $('.phone-error').html('');
        if(mobile){
            $.ajax({
                type: 'post',
                url: '{{ route("post:send_forgot_otp") }}',
                data: {"mobile" : mobile,"_token":"{{ csrf_token() }}"},
                success: function (result) {
                    if(result.success) {
                        $('#otp').show();
                        $('#mobile').attr('disabled','true')
                        $('.send-btn').hide();
                        $('.verify-btn').show();
                        $('.otp-section').show();
                    }else{
                        $('.phone-error').html(result.message);
                    }
                }
            })
        }
    });

    $(document).on('click', '.verify-btn', function () {
        var mobile = $('#mobile').val();
        var otp = $('#otp').val();
        if(otp){
            $.ajax({
                type: 'post',
                url: '{{ route("post:verify_forgot_otp") }}',
                data: {"mobile" : mobile,"otp" : otp,"_token":"{{ csrf_token() }}"},
                success: function (result) {
                    if(result.success) {
                        showMyToast('success','New password sent to your registered mobile');
                        window.location.replace("{{ url('') }}");
                    }else{
                        $('.phone-error').html(result.message);
                    }
                }
            })
        }
    });
    
    function showMyToast($type , $message) {
        bootoast.toast({ message: $message, type: $type, position: 'right-top' });
    }
    
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    @if (Session::has('success'))
        showMyToast("success","{{ Session::get('success') }}"); 
    @endif
    @if (Session::has('error'))
        showMyToast("error","{{ Session::get('error') }}"); 
    @endif
    </script>
</body>
</html>