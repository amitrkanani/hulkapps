@if(isset($selected_city))

<select class="form-control" name="city"  id="city" required>
    @foreach($cities as $city)
        <option value="{{ $city->id }}" {{ $selected_city == $city->id ? 'selected' : '' }}>{{ $city->name }}</option>
    @endforeach
</select>

@else

<select class="form-control" name="city"  id="city" required>
    @foreach($cities as $city)
        <option value="{{ $city->id }}">{{ $city->name }}</option>
    @endforeach
</select>

@endif



