// Ordered according to user preference: Smart Healthcare, Healthcare App, Vehicle Service, Smart Tea, Laundry
const projects = [
  {
    id: '5',
    title: 'Smart Healthcare & Telemedicine Platform',
    short: 'Microservices telemedicine platform containerized with Docker and Kubernetes.',
    image: 'https://via.placeholder.com/1200x700?text=Telemedicine+Platform',
    technologies: ['Spring Boot','React','Docker','Kubernetes'],
    type: 'Academic Group Project',
    github: 'https://github.com/yourusername/smart-telemedicine',
    demo: '',
    features: [
      'Doctor management',
      'Appointment handling',
      'Video consultation integration'
    ],
    contributions: [
      'Developed doctor management microservices',
      'Built appointment scheduling APIs',
      'Containerized services using Docker and Kubernetes'
    ],
    screenshots: [
      'https://via.placeholder.com/1200x700?text=Telemedicine+1',
      'https://via.placeholder.com/1200x700?text=Telemedicine+2',
      'https://via.placeholder.com/1200x700?text=Telemedicine+3'
    ]
  },
  {
    id: '4',
    title: 'Healthcare Web Application',
    short: 'Full-stack health tracking platform with BMI and nutrition logs.',
    image: 'https://via.placeholder.com/1200x700?text=Healthcare+App',
    technologies: ['MongoDB','Express.js','React','Node.js'],
    type: 'Academic Project',
    github: 'https://github.com/yourusername/healthcare-app',
    demo: '',
    features: [
      'Mental health tracking',
      'BMI monitoring',
      'Nutrition logs'
    ],
    contributions: [
      'Built full-stack healthcare platform',
      'Developed REST APIs',
      'Implemented health tracking modules'
    ],
    screenshots: [
      'https://via.placeholder.com/1200x700?text=Healthcare+1',
      'https://via.placeholder.com/1200x700?text=Healthcare+2'
    ]
  },
  {
    id: '3',
    title: 'Vehicle Service Center Management System',
    short: 'Full-stack vehicle service and appointment tracking platform.',
    image: 'https://via.placeholder.com/1200x700?text=Vehicle+Service+Center',
    technologies: ['Spring Boot','React','MySQL'],
    type: 'Individual Project',
    github: 'https://github.com/yourusername/vehicle-service-center',
    demo: '',
    features: [
      'Vehicle service management',
      'Appointment tracking',
      'Booking system'
    ],
    contributions: [
      'Developed backend APIs using Spring Boot',
      'Built frontend using React',
      'Connected MySQL database'
    ],
    screenshots: [
      'https://via.placeholder.com/1200x700?text=Vehicle+1',
      'https://via.placeholder.com/1200x700?text=Vehicle+2'
    ]
  },
  {
    id: '2',
    title: 'Smart Tea Factory Management System',
    short: 'Inventory & warehouse system with real-time stock tracking.',
    image: 'https://via.placeholder.com/1200x700?text=Smart+Tea+Factory',
    technologies: ['MongoDB','Express.js','React','Node.js'],
    type: 'Academic Project',
    github: 'https://github.com/yourusername/smart-tea-factory',
    demo: '',
    features: [
      'RESTful APIs',
      'Real-time stock tracking',
      'Report generation'
    ],
    contributions: [
      'Developed frontend and backend integration',
      'Created REST APIs',
      'Implemented stock tracking and messaging workflow'
    ],
    screenshots: [
      'https://via.placeholder.com/1200x700?text=Tea+1',
      'https://via.placeholder.com/1200x700?text=Tea+2'
    ]
  },
  {
    id: '1',
    title: 'Laundry Management System',
    short: 'Academic full-stack order management system using Java and JSP/Servlets.',
    image: 'https://via.placeholder.com/1200x700?text=Laundry+System',
    technologies: ['Java', 'JSP', 'Servlets', 'Tailwind CSS', 'MySQL'],
    type: 'Academic Project',
    github: '',
    demo: '' ,
    features: [
      'Order management and CRUD operations',
      'Discount management module',
      'Responsive UI'
    ],
    contributions: [
      'Developed backend using JSP/Servlet MVC architecture',
      'Implemented CRUD functionalities',
      'Improved UI with Tailwind CSS',
      'Built discount management module'
    ],
    screenshots: [
      'https://via.placeholder.com/1200x700?text=Laundry+1'
    ]
  }
]

export default projects
