    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#managedistributors" aria-expanded="true" aria-controls="managedistributors">
          <i class="fas fa-fw fa-user-plus"></i>
          <span>User</span>
        </a>
        <div id="managedistributors" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Manage User</h6>
            <a class="collapse-item" href="{{ route('get:add_distributor') }}">Add User</a>
            <a class="collapse-item" href="{{ route('get:manage_distributors') }}">Manage User</a>
          </div>
        </div>
    </li>
    
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#formcreate" aria-expanded="true" aria-controls="formcreate">
          <i class="fas fa-fw fa-user-plus"></i>
          <span>Form</span>
        </a>
        <div id="formcreate" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Manage Form</h6>
            <a class="collapse-item" href="{{ route('get:create_form') }}">Buil Form</a>
            <a class="collapse-item" href="{{ route('get:form_list') }}">Form List</a>
          </div>
        </div>
    </li>