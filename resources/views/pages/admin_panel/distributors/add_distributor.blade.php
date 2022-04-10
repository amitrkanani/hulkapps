@extends('layouts.app')
@section('title','Add Distributor')
@section('customcss') 
@endsection
@section('content')
<!-- Begin Page Content -->
<div class="container-fluid">
  <div class="card shadow mb-4" id="ub-card">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold">
          <i class="fas fa-user-plus pr-2"></i> Add Distributor</h6>
    </div>
    <div class="card-body">
      
        <div class="col-md-12">
            <form action="{{ route('post:add_distributor') }}" method="post" enctype="multipart/form-data">
              @csrf
              
                <div class="form-group row">
                    <div class="col-md-6 mb-4">
                        <label for="phone">Mobile:</label>
                        <input type="text" class="form-control" id="mobile" placeholder="Enter mobile" 
                        name="mobile" value="{{ old('mobile') }}" maxlength="10" onkeypress="return isNumber(event)"  autocomplete="off" required="">
                    </div>
                
                    <div class="col-md-6 mb-4">
                        <label for="name">Person Name:
                        
                        <input type="text" class="form-control" id="name" name="name" value="{{ old('name') }}"  
                        placeholder="Enter Person Name" autocomplete="off" required="">
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" value="{{ old('email') }}" 
                        placeholder="Email" autocomplete="off" required="">
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="phone">Date of Birth:</label>
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                            </div>
                            <input class="form-control datepicker"  type="text"  id="dob" name="dob" value="{{ old('dob') }}" required="">
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <label for="email">Address:</label>
                        <input type="text" class="form-control" id="address" name="address" placeholder="Address" 
                        value="{{ old('address') }}" autocomplete="off" required="">
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="phone">Pincode:</label>
                        <input type="text" class="form-control" id="pincode" name="pincode" placeholder="Pincode" 
                        value="{{ old('pincode') }}" onkeypress="return isNumber(event)" maxlength="6"  autocomplete="off" required="">
                    </div>

                    <div class="col-md-6 mb-4">
                      <label for="dropdown-test" class="control-label">State</label>
                        <select class="form-control" name="state"  id="state" onchange="statechange(this.value)" required>
                            @foreach($states as $state)
                            <option value="{{ $state->id }}">{{ $state->name}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-md-6 mb-4">
                      <label for="dropdown-test" class="control-label" >City</label>
                        <select class="form-control" name="city" placeholder="City" id="city" required>
                            <option value="">Select City</option>
                        </select>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="name">Pssword:
                        
                        <input type="password" class="form-control" id="password" name="password" value=""  
                        placeholder="Enter Password" autocomplete="off" required="">
                    </div>
                    
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
  </div>
</div>
@endsection
@section('customjs')
<script>
function statechange(state) {
    $.ajax({
        type: 'post',
        dataType:'html',
        url: "{{ route('post:get_state_city') }}",
        data: {"state" : state ,"_token":"{{ csrf_token() }}"},
        success: function (result) {
            $('#city').html(result);
        }
    });
}
</script>
@endsection