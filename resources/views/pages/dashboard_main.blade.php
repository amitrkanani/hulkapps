@extends('layouts.app')@section('title','Dashboard')@section('content')@if(Auth::User()->user_type != 1)<div class="container-fluid">    <h3>Form List</h3>    @foreach($form_list as $r)    <div class="col-md-3 mb-3">        <div class="card shadow mb-3" id="">            <div class="card-body">                <a href="form-fill/{{ $r->id }}">{{ $r->name }}  </a>            </div>        </div>    </div>    @endforeach</div>@endif@endsection