(module
  (func $fib (param $n i32) (result i32)
    local.get $n
    i32.const 2
    i32.lt_u
    (if (result i32)
      (then
        local.get $n
      )
      (else
        local.get $n
        i32.const 1
        i32.sub
        call $fib
        local.get $n
        i32.const 2
        i32.sub
        call $fib
        i32.add
      )
    )
  )
  (export "fib" (func $fib))
)
