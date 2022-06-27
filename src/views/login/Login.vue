<template>
  <div class="post-index">
    <div id="app">
      <section class="section">
        <div class="container mt-5">
          <div class="row">
            <div class="col-3"></div>
            <dic class="col-6">            
                <div class="card card-primary">
                <div class="card-header">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form
                    method="POST"
                    action="#"
                    class="needs-validation"
                    novalidate=""
                    >
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Masukkan Alamat Email"
                        value="mail@gmail.com"
                        tabindex="1"
                        required
                        autofocus
                        />
                    </div>

                    <div class="form-group">
                        <div class="d-block">
                        <label
                            for="password"
                            class="
                            control-label
                            @error('password')
                            is-invalid
                            @enderror
                            "
                            >Password</label
                        >
                        </div>
                        <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Masukkan Password"
                        tabindex="2"
                        required
                        />
                    </div>
                    <div class="form-group">
                        <button
                        type="submit"
                        class="btn btn-primary btn-lg btn-block"
                        tabindex="4"
                        >
                        Login
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </dic>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

// <script>
// export default {
//     data() {
//         return {}
//     }
// }
//
</script>