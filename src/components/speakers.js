// Function: gets file name and returns the src for the image
const load_avatar = name => require('../assets/speakers/' + name).default;

// Fake JSON from DB: Returns all the verified speakers
export const speakers = [
  {
    name: "Andrea Morillo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("andrea.jpg"),
    topics: {
      'ux design': 'badge-success',
      'ui design': 'badge-warning',
    }
  },

  {
    name: "Gabriela Katić",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("gabriela.jpg"),
    topics: {
      'linux': 'badge-info',
      'data science': 'badge-success',
    }
  },

  {
    name: "Zhōu Mei",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("mei.jpg"),
    topics: {
      'growth marketing': 'badge-info',
    }
  },

  {
    name: "Matheus Lutz",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("matheus.jpg"),
    topics: {
      'leadership': 'badge-primary',
      'networking': 'badge-danger',
    }
  },

  {
    name: "Adrie Van Asperen",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("adrie.jpg"),
    topics: {
      'apple': 'badge-secondary',
      'branding': 'badge-light',
    }
  },

  {
    name: "Sacha Lifszyc",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("sacha.jpg"),
    topics: {
      'frontend': 'badge-info',
      'backend': 'badge-secondary',
    }
  },

  {
    name: "Samuel Hitzig",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ea similique ratione pariatur nisi optio. Qui amet sint deserunt, eos aspernatur hic alias? Neque, odio adipisci omnis quas laboriosam sit? Quisquam provident dolorem aspernatur natus quo? Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.",
    image: load_avatar("samuel.jpg"),
    topics: {
      'investment': 'badge-info',
      'startups': 'badge-primary',
    }
  }
];