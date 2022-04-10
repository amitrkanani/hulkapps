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
</head>

<body class="bg-gradient-primary0">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-8 d-none d-lg-block text-center">

              </div>
                  <div class="col-lg-12" style="padding:1% 5%;">
                      <div class="text-center ">
                        <img src="{{ asset('theme/img/logo.png') }}">
                        <br><br>
                        <h1 class="h4 text-gray-900 mb-4">Distributor Registration</h1>
                      </div>
                      
                      <form class="user " action="{{ route('post:distributor_registration') }}" method="post" enctype="multipart/form-data">
                        @csrf
                  
                        <div class="form-group row">
                            <div class="col-md-6 ">
                                <label for="phone">Mobile:</label>
                                <input type="text" class="form-control " id="mobile" placeholder="Enter mobile" 
                                name="mobile" value="{{ old('mobile') }}" maxlength="10" onkeypress="return isNumber(event)"  autocomplete="off" required="">
                            </div>
                        
                            <div class="col-md-6 mb-2">
                                <label for="name">Bussiness Or Person Name:
                                <small class="text-danger">(As per PAN)</small></label>
                                <input type="text" class="form-control " id="name" name="name" value="{{ old('name') }}"  
                                placeholder="Enter Bussiness Or Person Name" autocomplete="off" required="">
                            </div>
                        
                            <div class="col-md-6 mb-2">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control " id="email" name="email" value="{{ old('email') }}" 
                                placeholder="Email" autocomplete="off" required="">
                            </div>
                        
                            <div class="col-md-6 mb-2">
                                <label for="phone">Date of Birth:</label>
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                                    </div>
                                    <input class="form-control datepicker" type="text"  id="dob" name="dob" value="{{ old('dob') }}" required="">
                                </div>
                            </div>
    
                            <div class="col-md-6 mb-2">
                                <label for="email">Address:</label>
                                <input type="text" class="form-control " id="address" name="address" placeholder="Address" 
                                value="{{ old('address') }}" autocomplete="off" required="">
                            </div>
                        
                            <div class="col-md-6 mb-2">
                                <label for="phone">Pincode:</label>
                                <input type="text" class="form-control " id="pincode" name="pincode" placeholder="Pincode" 
                                value="{{ old('pincode') }}" onkeypress="return isNumber(event)" maxlength="6"  autocomplete="off" required="">
                            </div>
    
                            <div class="col-md-6 mb-2">
                              <label for="dropdown-test" class="control-label ">State</label>
                                <select class="form-control" name="state"  id="state" onchange="statechange(this.value)" required>
                                    @foreach($states as $state)
                                    <option value="{{ $state->id }}">{{ $state->name}}</option>
                                    @endforeach
                                </select>
                            </div>
    
                            <div class="col-md-6 mb-2">
                              <label for="dropdown-test" class="control-label " >City</label>
                                <select class="form-control" name="city" placeholder="City" id="city" required>
                                    <option value="">Select City</option>
                                </select>
                            </div>
                            
                            <div class="col-md-6 offset-3 mt-2">
                                <button type="submit" class="btn btn-primary btn-block mb-4">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                    
                    <div class="text-center mb-5">
                        <a href="{{ url('') }}">Already have an account?</a>
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
    function showMyToast($type , $message) {
        bootoast.toast({ message: $message, type: $type, position: 'right-top' });
    }
    
    $(document).ready(function() {
    	var date = new Date();
    	var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    	$('.datepicker').datepicker({
    	    format: "yyyy-mm-dd",
    	    todayHighlight: true,
    	    orientation: 'bottom',
    	    autoclose: true
    	});
    	$('.datepicker').datepicker('setDate', today);
    });

    function statechange(state) {
        $.ajax({
            type: 'post',
            dataType:'html',
            url: "{{ route('post:get_stateid_city') }}",
            data: {"state" : state ,"_token":"{{ csrf_token() }}"},
            success: function (result) {
                $('#city').html(result);
            }
        });
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