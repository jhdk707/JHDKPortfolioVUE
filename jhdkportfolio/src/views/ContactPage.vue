   <template>
    <div class="container">
      <h2 class="h2 text-center" id="Contact-Me">Contact Me</h2>
      <p class="h3 text-center">Let's connect and talk about code, music, food, movies, cool ocean creatures, or whatever you like!</p>
  
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col">
            <label for="firstName"></label>
            <input
              v-model="firstName"
              type="text"
              class="form-control"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div class="col">
            <label for="lastName"></label>
            <input
              v-model="lastName"
              type="text"
              class="form-control"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group col">
            <label for="email"></label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              name="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group form-block">
            <label for="message"></label>
            <input
              v-model="message"
              type="text"
              class="form-control"
              name="message"
              id="message"
              placeholder="Enter a message!"
            />
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      };
    },
    methods: {
      handleFormSubmit() {
        // Alert the user with their first and last name, clear the inputs
        console.log(this.firstName, this.lastName, this.email, this.message);
  
        var input = [this.firstName, this.lastName, this.email, this.message];
        console.log("input", input);
        localStorage.setItem("contact", input);
  
        // Clear input fields
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.message = "";
  
        alert(`Thanks for your message ${this.firstName}! I'll be in touch!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .submit-btn {
  background-color: black;
  padding-right: 1em;
  border: .05em;
  border-style: solid;
  color: hsla(160, 100%, 37%, 1);
}
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  