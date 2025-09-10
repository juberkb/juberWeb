import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import blog2Img from "../../Media/anpr.webp"
import blog1Img from "../../Media/reacCode.jpg"

const blogPosts = {
 1: {
    id: 1,
    title: "Complete React Development Guide: From Setup to Advanced Concepts",
    date: "June 15, 2023",
    author: "Juber Khan",
    tags: ["React", "JavaScript", "Web Development", "Frontend", "Vite", "Chakra UI"],
    image:blog1Img,
    content: `
      <h2>Introduction to React</h2>
      <p>React is a powerful JavaScript library for building user interfaces, particularly single-page applications
       where you need a fast, interactive user experience. Developed by Facebook, React has become one of the most
        popular frontend libraries due to its component-based architecture and efficient rendering.</p>
      
      <h2>Project Setup with Vite</h2>
      <p>While Create React App is a common starting point, Vite offers significantly faster development server startup and hot module replacement (HMR). Here's how to set up a React project with Vite:</p>
      
      <pre><code>npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev</code></pre>
      
      <h2>Installing Essential Packages</h2>
      <p>A modern React setup often includes several key packages:</p>
      
      <pre><code>npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-icons react-slick slick-carousel
npm install react-router-dom</code></pre>
      
      <h2>Understanding React's Virtual DOM</h2>
      <p>React's Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.</p>
      
      <p>When component state changes, React:</p>
      <ol>
        <li>Creates a new virtual DOM tree</li>
        <li>Diffs it against the previous tree</li>
        <li>Computes the most efficient way to update the real DOM</li>
        <li>Applies the changes</li>
      </ol>
      
      <h2>Creating and Using Components</h2>
      <p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.</p>
      
      <h3>Functional Components</h3>
      <pre><code>import React from 'react';

const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Welcome;</code></pre>
      
      <h3>Class Components</h3>
      <pre><code>import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;</code></pre>
      
      <h2>Props and PropTypes</h2>
      <p>Props (properties) are read-only attributes passed to components. They allow data flow from parent to child components.</p>
      
      <pre><code>import PropTypes from 'prop-types';

const UserProfile = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired
};

UserProfile.defaultProps = {
  age: 18
};</code></pre>
      
      <h2>State Management with useState Hook</h2>
      <p>The useState hook allows functional components to manage state.</p>
      
      <pre><code>import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};</code></pre>
      
      <h2>Side Effects with useEffect Hook</h2>
      <p>The useEffect hook handles side effects in functional components.</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch user data when component mounts
    fetchUserData();
  }, []); // Empty dependency array means run once on mount
  
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};</code></pre>
      
      <h2>Working with APIs: GET, POST, PUT, DELETE</h2>
      <p>React applications frequently interact with APIs. Here's how to handle different HTTP methods:</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  // GET request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/items');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // POST request
  const addItem = async () => {
    try {
      const response = await fetch('https://api.example.com/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItem }),
      });
      
      const result = await response.json();
      setData([...data, result]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  
  // PUT request
  const updateItem = async (id, updatedData) => {
    try {
      const response = await fetch(\`https://api.example.com/items/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      
      const result = await response.json();
      setData(data.map(item => item.id === id ? result : item));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  // DELETE request
  const deleteItem = async (id) => {
    try {
      await fetch(\`https://api.example.com/items/\${id}\`, {
        method: 'DELETE',
      });
      
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
  return (
    <div>
      <h2>API Interaction Example</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add</button>
      
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateItem(item.id, { name: \`Updated \${item.name}\` })}>
              Update
            </button>
            <button onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};</code></pre>
      
      <h2>Session Storage and Local Storage</h2>
      <p>Web storage APIs allow you to store data in the browser:</p>
      
      <pre><code>// Using localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Using sessionStorage
const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getFromSessionStorage = (key) => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Custom hook for localStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
};</code></pre>
      
      <h2>Memoization and Performance Optimization</h2>
      <p>React provides several methods to optimize performance:</p>
      
      <pre><code>import React, { useState, useMemo, useCallback, memo } from 'react';

// useMemo for expensive calculations
const ExpensiveComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]); // Only recalculate when items or filter change
  
  return (
    <ul>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

// useCallback for function references
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Function reference remains stable
  
  return (
    <div>
      <ChildComponent onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
};

// memo for preventing unnecessary re-renders
const ChildComponent = memo(({ onIncrement }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onIncrement}>Increment</button>;
});</code></pre>
      
      <h2>Creating Dynamic Routes with React Router</h2>
      <p>React Router enables navigation in your React application:</p>
      
      <pre><code>import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId);
  }, [userId]);
  
  const fetchUser = async (id) => {
    const response = await fetch(\`/api/users/\${id}\`);
    const userData = await response.json();
    setUser(userData);
  };
  
  if (!user) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};</code></pre>
      
      <h2>Using Chakra UI for Modern Styling</h2>
      <p>Chakra UI provides a set of accessible and composable React components:</p>
      
      <pre><code>import { ChakraProvider, Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const ChakraExample = () => {
  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl">
            Welcome to Chakra UI
          </Heading>
          
          <Input placeholder="Enter your email" />
          
          <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="solid">
            Get Started
          </Button>
          
          <Button leftIcon={<EmailIcon />} variant="outline">
            Contact Us
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};</code></pre>
      
      <h2>Creating a Carousel with React Slick</h2>
      <p>React Slick is a carousel component built for React:</p>
      
      <pre><code>import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const images = [
    'https://via.placeholder.com/800x400?text=First+Slide',
    'https://via.placeholder.com/800x400?text=Second+Slide',
    'https://via.placeholder.com/800x400?text=Third+Slide',
  ];
  
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={\`Slide \${index + 1}\`} style={{ width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};</code></pre>
      
      <h2>Using React Icons</h2>
      <p>React Icons provides popular icon libraries as React components:</p>
      
      <pre><code>import { FaReact, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const IconExample = () => {
  return (
    <div>
      <FaReact size={48} color="#61DAFB" />
      <SiJavascript size={48} color="#F7DF1E" />
      <SiTypescript size={48} color="#3178C6" />
      <FaGithub size={48} />
      <FaTwitter size={48} color="#1DA1F2" />
    </div>
  );
};</code></pre>
      
      <h2>Creating Custom Hooks</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions:</p>
      
      <pre><code>import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

// Using the custom hook
const UserList = () => {
  const { data: users, loading, error } = useFetch('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};</code></pre>
      
      <h2>Conclusion</h2>
      <p>React is a powerful library that, when combined with the right tools and patterns, allows you to build sophisticated web applications. By understanding concepts like components, props, state, hooks, and performance optimization, you can create efficient and maintainable React applications.</p>
      
      <p>Remember that the React ecosystem is constantly evolving, so stay curious and keep learning about new patterns and best practices.</p>
    `
  },
 2: {
  id: 2,
  title: "Documentation in Detail for ANPR Software Development",
    date: "9th Sep, 2025",
  content: `
    <p>Building an <strong>Automatic Number Plate Recognition (ANPR)</strong> software is a highly practical project that combines computer vision, machine learning, backend business logic, frontend dashboards, and database management. In this blog, I’ll walk through how to architect and implement such a system using <strong>Node.js, Express, React.js, MSSQL</strong>, and optionally <strong>Python (OpenCV + YOLO + OCR)</strong> for plate recognition.</p>

    <h2>📌 System Overview</h2>
    <p>The ANPR software is designed as a web-based solution that can process live video streams or images from <strong>IP cameras</strong> (in production) or <strong>mobile cameras</strong> (for testing). Its primary purpose is to automatically detect and recognize vehicle license plates and classify them as <em>Verified</em> (if found in the registered database) or <em>Unverified</em>.</p>

    <h3>Core Database Tables</h3>
    <ul>
      <li><strong>Registered Vehicles</strong> – Stores authorized vehicles (plate number, owner details, vehicle type, etc.).</li>
      <li><strong>Captured Vehicle Events</strong> – Logs all detected vehicles with details such as license plate, timestamp, camera source, recognition confidence, and aggregated statistics.</li>
    </ul>

    <h2>⚙️ Technology Stack</h2>
    <ul>
      <li><strong>Python (OpenCV + YOLO + OCR)</strong> → Detection microservice</li>
      <li><strong>Node.js + Express</strong> → Backend (business logic + APIs)</li>
      <li><strong>MSSQL</strong> → Centralized database</li>
      <li><strong>React.js</strong> → Frontend dashboard</li>
      <li><strong>Optional</strong>: Plate Recognizer API (if external service is preferred instead of Python detection)</li>
    </ul>

    <h2>🛠️ Architecture</h2>
    <h3>Option 1: With Python Microservice</h3>
    <ol>
      <li><strong>Python microservice</strong> → Detects plates using YOLO + OCR, exposes <code>/detect</code> API returning JSON like <code>{ "plate": "MH12AB1234", "confidence": 0.92 }</code>.</li>
      <li><strong>Node.js backend</strong> → Receives detection results, stores them in MSSQL, verifies against registered vehicles, and provides APIs.</li>
      <li><strong>React frontend</strong> → Displays live detections, verification status, and analytics.</li>
      <li><strong>MSSQL database</strong> → Stores registered vehicles and captured events.</li>
    </ol>

    <h3>Option 2: Without Python (Using Plate Recognizer API)</h3>
    <p>If we leverage Plate Recognizer or a similar API, we don’t need Python. Node.js communicates directly with the API, then stores and processes data in MSSQL.</p>

    <h2>🔬 Comparative Analysis of ANPR Technologies</h2>
    <h3>OpenCV + YOLO + OCR (Python Microservice)</h3>
    <p><strong>Pros:</strong> Fully customizable, works offline, no recurring costs.<br>
    <strong>Cons:</strong> Requires GPU/CPU resources, higher maintenance.</p>

    <h3>Plate Recognizer API</h3>
    <p><strong>Pros:</strong> Quick setup, accurate, scalable.<br>
    <strong>Cons:</strong> Paid service, internet dependency.</p>

    <h3>Google Cloud Vision OCR</h3>
    <p><strong>Pros:</strong> Strong OCR capabilities, supports multi-language plates.<br>
    <strong>Cons:</strong> Less optimized for plates, higher cost.</p>

    <h2>🚦 Workflow Example</h2>
    <ol>
      <li>Camera captures an image.</li>
      <li>Image sent to Python microservice (<code>/detect</code>).</li>
      <li>Python returns JSON result with plate & confidence.</li>
      <li>Node.js backend verifies against MSSQL (Registered Vehicles).</li>
      <li>Event stored in <em>Captured Vehicle Events</em> as Verified/Unverified.</li>
      <li>React frontend updates dashboard in real-time.</li>
    </ol>

    <h2>📊 Frontend Features (React.js)</h2>
    <ul>
      <li>Live Monitoring Dashboard</li>
      <li>Vehicle Management (CRUD for registered vehicles)</li>
      <li>Event Logs with filters (date, camera, status)</li>
      <li>Analytics & Reports (daily/weekly/monthly)</li>
    </ul>

    <h2>📂 Example API Endpoints</h2>
    <pre><code>// Python Microservice
POST /detect 
Input: Image (base64 or multipart)
Output: { "plate": "MH12AB1234", "confidence": 0.92 }

// Node.js Backend
POST /api/events → Save captured vehicle event
GET /api/events → Fetch captured events
GET /api/vehicles → List registered vehicles
POST /api/vehicles → Register a new vehicle
    </code></pre>

    <h2>📌 Real-World Considerations</h2>
    <ul>
      <li><strong>Camera Setup</strong>: IP cameras for production, mobile cameras for testing.</li>
      <li><strong>Scalability</strong>: Microservice architecture enables scaling detection and backend independently.</li>
      <li><strong>Performance</strong>: GPU recommended for YOLO models.</li>
      <li><strong>Security</strong>: Use authentication, role-based access, and encrypt sensitive data.</li>
    </ul>

    <h2>🚀 Conclusion</h2>
    <p>By combining React.js, Node.js, MSSQL, and Python/OpenCV-YOLO-OCR, we can build a robust ANPR software system supporting real-time detection, verification, event logging, and analytics. For simpler setups, Plate Recognizer offers faster implementation but at a recurring cost. For long-term scalability and control, the Python microservice approach is highly recommended.</p>
  `,
  author: "Juber Khan",
  tags: ["ANPR", "Node.js", "React", "Python", "MSSQL", "OpenCV"],
  image: blog2Img
}

};

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>Post not found</h1>
          <Link to="/" className="back-button">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Link to="/" className="back-button">
          &larr; Back to Home
        </Link>
        
        <div className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-author">By {post.author}</span>
          </div>
        </div>
        
        <img src={post.image} alt={post.title} className="blog-post-image" />
        
        <div className="blog-post-content-wrapper">
          <div 
            className="blog-post-content" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
        
        <div className="blog-post-footer">
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-post-tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;