@extends('blog::layouts.master')

@section('content')
    <h1>Hello World</h1>
    @php
        $route = Route::getRoutes();
        foreach ($route as $value) {
            $methods = $value->methods();
            $uri = $value->uri();
            if(in_array('GET', $methods) &&
                !preg_match('/api/i', $uri) &&
                !preg_match('/admin/i', $uri)
            ){
                echo $uri . '</br>';
            }
        }
    @endphp
    <p>
        This view is loaded from module: {!! config('blog.name') !!}
    </p>
@endsection
