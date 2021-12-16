# Single-spa with a Federated Module
### Overview

``` mfe-component ``` contains TestComponent that is exposed using module federation.

``` single-spa-host ``` is the root config for single spa application.

``` single-spa-child ``` is a single spa application that consumes TestComponent using module federation.

### Setup
``` init.sh ```


### Run

1. Start all 3 applications using ```npm start ```

4. Visit ```http://localhost:9000``` to see single-spa-host running

5. Visit ```http://localhost:9000/child``` to see single-spa-child & mfe-component running