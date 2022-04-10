@extends('layouts.app')@section('title','Create Form')@section('content')<div class="container-fluid">    <div class="card-body">        <div class="col-md-12">            @if(count($errors))            	<div class="alert alert-danger">                        		<strong>Whoops!</strong> There were some problems with your input.                        		<br/>                        		<ul>                        			@foreach($errors->all() as $error)                        			<li>{{ $error }}</li>                        			@endforeach                        		</ul>                        	</div>                        @endif            <form action="{{ route('post:create_form') }}" method="post" enctype="multipart/form-data">                @csrf                <div class="form-group row">                    <div class="col-md-6 mb-3">                        <label for="phone">Form Name:</label>                        <input type="text" class="form-control" id="form_name" name="form_name"                          placeholder="Enter Form Name" autocomplete="off" required="">                    </div>                    <div class="col-md-6 mb-3">                        <label for="phone">Form Feild:</label>                        <input type="text" class="form-control" id="form_feild" name="form_feild"                          placeholder="Enter No. of Form Feild" autocomplete="off" onkeypress="return isNumber(event)" required="">                    </div>                </div>                                <button type="submit" class="btn btn-primary submit-btn">Next</button>            </form>        </div>    </div></div>@endsection