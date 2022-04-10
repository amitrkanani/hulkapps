@extends('layouts.app')
@section('title','My App')
@section('customcss')
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/css/dropify.min.css" media="screen,projection">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/js/dropify.min.js"></script>
<script>
 $(document).ready(function() {
    $('.dropify').dropify(); 
 });
</script>
@endsection
@section('content')
<!-- Begin Page Content -->
<div class="container-fluid">
  <div class="card shadow mb-4" id="ub-card">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold">
          <i class="fas fa-user-plus pr-2"></i> My App Settings</h6>
    </div>
    <div class="card-body">
      
        <div class="col-md-12">
            <form action="{{ route('post:my_app') }}" method="post" enctype="multipart/form-data">
              @csrf
              
                <div class="form-group row">
                    <div class="col-md-6 mb-4">
                        <label for="phone">Title:</label>
                        <input type="text" class="form-control" id="title" placeholder="title" name="title" value="{{ $data->title }}" required="">
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="phone">URL:</label>
                        <input type="text" class="form-control" id="website_url" placeholder="website url" name="website_url" value="{{ $data->website_url }}" required="">
                    </div>
                    
                    <div class="col-md-6 mb-3">
                        <label for="phone">Contact Number:</label>
                        <input type="text" class="form-control" id="mobile" placeholder="Enter mobile" name="contact_number" value="{{ $data->contact_number }}" 
                        maxlength="10" minlength="10" onkeypress="return isNumber(event)"  autocomplete="off" required="">
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <label for="phone">Address:</label>
                        <input type="text" class="form-control" id="address" placeholder="address" name="address" value="{{ $data->address }}" required="">
                    </div>
                    
                    <div class="col-md-4 mb-3">
                        <label for="pan_image">Logo</label>
                          <input type="file" id="logo" name="logo" class="dropify"  data-default-file="{{ asset('uploads/website_logo/'.$data->logo) }}" accept="image/*"  />
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