<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="ish">
  <meta name="author" content="ish">
  <title>@yield('title')</title>
  <link rel="icon" type="image/x-icon" href="{{ $website->logo }}" />
  <link href="{{ asset('theme/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link href="{{ asset('theme/css/sb-admin-2.css') }}" rel="stylesheet">
  <script src="{{ asset('theme/vendor/jquery/jquery.min.js') }}"></script>

  <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css" />
  <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-datepicker3.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/bootoast.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/select2.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/styles.css') }}" type="text/css" />
  <link rel="stylesheet" href="{{asset('assets/css/custome.css')}}" />

  <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js" type="text/javascript"></script>
  <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
  <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js" type="text/javascript"></script>
  <script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap.min.js" type="text/javascript"></script>
  <script src="{{ asset('assets/vendors/custom/datatables/datatables.bundle.js') }}" type="text/javascript"></script>
  <script src="{{ asset('assets/js/datatable/dataTables.buttons.min.js') }}"></script>
  <script src="{{ asset('assets/js/datatable/buttons.flash.min.js') }}"></script>
  <script src="{{ asset('assets/js/datatable/jszip.min.js') }}"></script>
  <script src="{{ asset('assets/js/datatable/pdfmake.min.js') }}"></script>
  <script src="{{ asset('assets/js/datatable/vfs_fonts.js') }}"></script> 
  <script src="{{ asset('assets/js/datatable/buttons.html5.min.js') }}"></script>
  <script src="{{ asset('assets/js/datatable/buttons.print.min.js') }}"></script>
  <script src="{{ asset('assets/js/select2.full.min.js') }}"></script>
  <script src="{{ asset('assets/js/bootstrap-datepicker.js') }}"></script>
  <script src="{{ asset('assets/js/bootoast.js') }}"></script>
  <script src="{{ asset('assets/js/scripts.js') }}"></script>
  
  @yield('customcss')
</head>
<body id="page-top">
  <div id="wrapper">
    @include('layouts.includes.sidebar')
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        @include('layouts.includes.navbar')
        @yield('content')
      </div>
        @include('layouts.includes.footer')
      </div>
  </div>
  <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>
  <script src="{{ asset('theme/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('theme/vendor/jquery-easing/jquery.easing.min.js') }}"></script>
  <script src="{{ asset('theme/js/sb-admin-2.min.js') }}"></script>
  <!--<script src="{{ asset('theme/vendor/chart.js/Chart.min.js') }}"></script>-->
  <!--<script src="{{ asset('theme/js/demo/chart-area-demo.js') }}"></script>-->
  <!--<script src="{{ asset('theme/js/demo/chart-pie-demo.js') }}"></script>-->
  <script type="text/javascript">
    function showMyToast($type , $message) {
        bootoast.toast({ message: $message, type: $type, position: 'right-top' });
    }
    @if (Session::has('success'))
        showMyToast("success","{{ Session::get('success') }}"); 
    @endif
    @if (Session::has('error'))
        showMyToast("error","{{ Session::get('error') }}"); 
    @endif
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if(charCode == 46) { return true; }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    </script>
    @yield('customjs')
</body>
</html>