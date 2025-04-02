import React, { useState, useRef, useEffect } from 'react';
import '../Styles/ResumeChat.css';

const ResumeChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm Meharvir's resume assistant. Ask me anything about his experience, skills, or education!", 
      sender: 'bot' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  
  const messagesEndRef = useRef(null);

  // Resume data
  const resumeData = {
    name: "Meharvir Randhawa",
    education: "Computer Science Student",
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python", "Music Production"],
    experience: [
      "Worked on various web development projects",
      "Created music productions",
      "Developed portfolio website with modern features"
    ],
    interests: ["Web Development", "Music Production", "UI/UX Design"],
    contact: "contact@example.com",
    strengths: ["Problem-solving", "Quick learner", "Attention to detail", "Creative thinking"],
    projects: [
      "Portfolio Website - Modern React application with interactive features",
      "Music Production - Created original music compositions",
      "UI/UX Design - Designed user interfaces for web applications"
    ],
    reactExperience: {
      duration: "2 years",
      projects: ["Portfolio website", "E-commerce UI", "Interactive dashboards"],
      libraries: ["React Router", "Redux", "Styled Components", "React Hooks"]
    },
    webdevChoice: [
      "Meharvir chose web development because it combines creativity with technical problem-solving.",
      "The ability to build interactive experiences that can reach users worldwide was appealing.",
      "The rapidly evolving nature of web technologies offers continuous learning opportunities."
    ],
    workEnvironment: [
      "Meharvir thrives in collaborative environments that value creativity and innovation.",
      "He prefers teams that embrace modern development practices and knowledge sharing.",
      "He's comfortable in both in-office and remote settings, with a focus on clear communication."
    ],
    deadlineManagement: [
      "Meharvir approaches deadlines by breaking projects into manageable milestones.",
      "He prioritizes tasks effectively and maintains clear communication about progress.",
      "He's comfortable putting in extra effort when needed while maintaining code quality."
    ],
    uniqueQualities: [
      "Meharvir combines technical expertise with creative skills from his music production background.",
      "His attention to detail extends to both functionality and user experience.",
      "He approaches problems with both analytical and creative thinking, finding innovative solutions."
    ]
  };

  // Common recruiter questions with variations
  const recruiterQuestions = [
    "Tell me about your experience with React",
    "What projects have you worked on?",
    "What's your strongest programming skill?",
    "Why did you choose web development?",
    "How do you approach learning new technologies?",
    "What's your preferred work environment?",
    "Can you describe a challenging project?",
    "What are your career goals?",
    "How do you handle tight deadlines?",
    "What makes you unique as a developer?"
  ];

  // Generate 3 random questions on load
  useEffect(() => {
    generateRandomQuestions();
  }, []);

  // Generate random recruiter questions
  const generateRandomQuestions = () => {
    const shuffled = [...recruiterQuestions].sort(() => 0.5 - Math.random());
    setSuggestedQuestions(shuffled.slice(0, 3));
  };

  // Auto scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Generate new questions when opening
      generateRandomQuestions();
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSuggestedQuestion = (question) => {
    // Set the input text to the suggested question
    setInputText(question);
    
    // Submit the question
    handleSubmit(null, question);
    
    // Generate new questions
    generateRandomQuestions();
  };

  const handleSubmit = async (e, suggestedQuestion = null) => {
    if (e) e.preventDefault();
    
    const questionText = suggestedQuestion || inputText;
    if (questionText.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: questionText,
      sender: 'user'
    };
    
    setMessages([...messages, newUserMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Generate response with keyword matching
    const response = generateResponse(questionText);
    
    // Simulate typing delay (vary speed based on response length)
    const typingDelay = Math.min(Math.max(response.length * 15, 800), 2000);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: response,
        sender: 'bot',
      }]);
      setIsTyping(false);
      
      // Generate new questions
      generateRandomQuestions();
    }, typingDelay);
  };

  // Generate responses based on keywords in the query
  const generateResponse = (query) => {
    query = query.toLowerCase();
    
    // Greeting patterns
    if (/\b(hi|hello|hey|greetings|howdy)\b/.test(query)) {
      const greetings = [
        `Hello! I'm Meharvir's resume assistant. How can I help you today?`,
        `Hi there! I'd be happy to tell you about Meharvir's skills and experience.`,
        `Hey! Ask me anything about Meharvir's background or projects.`
      ];
      return getRandomResponse(greetings);
    }
    
    // Name
    if (/\b(name|who|call(ed)?)\b/.test(query)) {
      return `My creator's name is ${resumeData.name}.`;
    }
    
    // React experience specifically
    if (/\breact\b/.test(query)) {
      const reactResponses = [
        `Meharvir has ${resumeData.reactExperience.duration} of experience with React, developing ${resumeData.reactExperience.projects.join(', ')}. He's familiar with ${resumeData.reactExperience.libraries.slice(0, 3).join(', ')}, and other React libraries.`,
        `With React, Meharvir has built ${resumeData.reactExperience.projects[0]} and ${resumeData.reactExperience.projects[1]}. He utilizes modern React practices including Hooks and component architecture.`,
        `Meharvir's React experience includes building responsive UIs, managing state efficiently, and creating reusable component systems. His projects showcase his proficiency with the React ecosystem.`
      ];
      return getRandomResponse(reactResponses);
    }
    
    // Projects - handle more explicitly since it's a common question
    if (/\b(projects?|portfolio|built|created|made|developed)\b/.test(query)) {
      const projectResponses = [
        `Meharvir has worked on several projects including: ${resumeData.projects.join('; ')}.`,
        `Notable projects in Meharvir's portfolio include a modern React-based portfolio website with interactive UI elements, music production pieces, and UI/UX designs for web applications.`,
        `Meharvir's project highlights include this portfolio website with features like a responsive design, theme switching, animations, and interactive components including a chatbot assistant and mini-game.`
      ];
      return getRandomResponse(projectResponses);
    }
    
    // Work environment preferences - specific pattern for this common question
    if (/\b(work environment|culture|team|collaborate|remote|office|workplace|prefer(red)?)\b/.test(query)) {
      return getRandomResponse(resumeData.workEnvironment);
    }
    
    // Technical skills and programming languages
    if (/\b(tech|technical|programming|languages?|skills?|technologies|stack|tools)\b/.test(query)) {
      const skillResponses = [
        `Meharvir is proficient in ${resumeData.skills.join(', ')}. He's particularly strong in web development technologies.`,
        `The main technologies in Meharvir's stack include ${resumeData.skills.slice(0, 4).join(', ')}, with a focus on modern web development.`,
        `Meharvir's technical toolkit includes ${resumeData.skills.join(', ')}, allowing him to build full-featured web applications.`
      ];
      return getRandomResponse(skillResponses);
    }

    // Problem-solving approach
    if (/\b(problem|solve|approach|challenge|difficult|complex|issue)\b/.test(query)) {
      const problemSolvingResponses = [
        `Meharvir approaches problems by breaking them down into manageable components, researching solutions, and implementing the most efficient approach.`,
        `When facing challenges, Meharvir combines analytical thinking with creative problem-solving, often drawing from his diverse background in tech and music.`,
        `His problem-solving methodology involves understanding the root cause, considering multiple solutions, and choosing the most scalable approach.`
      ];
      return getRandomResponse(problemSolvingResponses);
    }

    // Learning and growth
    if (/\b(learn|learning|grow|growth|improve|study|education|training)\b/.test(query)) {
      const learningResponses = [
        `Meharvir is a quick learner who stays updated with the latest web technologies through continuous learning and practical application.`,
        `He actively pursues learning opportunities through online courses, documentation, and hands-on project work.`,
        `Meharvir believes in learning by doing, often taking on projects that push his boundaries and require learning new skills.`
      ];
      return getRandomResponse(learningResponses);
    }

    // Communication skills
    if (/\b(communicate|communication|team|collaboration|work with|interact)\b/.test(query)) {
      const communicationResponses = [
        `Meharvir values clear and effective communication, whether working in a team or with clients.`,
        `His experience includes collaborating with diverse teams and maintaining clear documentation of his work.`,
        `He emphasizes transparent communication and regular updates when working on projects.`
      ];
      return getRandomResponse(communicationResponses);
    }

    // Music and creativity
    if (/\b(music|creative|creativity|production|artistic|art)\b/.test(query)) {
      const creativityResponses = [
        `Meharvir combines his technical skills with creativity from his music production background.`,
        `His experience in music production adds a unique creative perspective to his development work.`,
        `The artistic mindset from music production helps him approach UI/UX design with both functionality and aesthetics in mind.`
      ];
      return getRandomResponse(creativityResponses);
    }

    // Future goals and aspirations
    if (/\b(future|goal|aspiration|plan|career|aim|ambition)\b/.test(query)) {
      const goalResponses = [
        `Meharvir aims to continue growing as a full-stack developer while exploring innovative ways to combine technology and creativity.`,
        `His career goals include mastering modern web technologies and contributing to projects that push technological boundaries.`,
        `He aspires to create impactful applications that provide excellent user experiences while maintaining high technical standards.`
      ];
      return getRandomResponse(goalResponses);
    }
    
    // Skills
    if (/\b(skill|know|can do|capable|proficient|good at|tech stack)\b/.test(query)) {
      if (/\b(best|strongest|top|main|primary)\b/.test(query)) {
        return `Meharvir's strongest skills are React and JavaScript, with significant experience in frontend development.`;
      }
      
      const skillResponses = [
        `Meharvir is skilled in: ${resumeData.skills.join(', ')}.`,
        `Meharvir's technical skills include ${resumeData.skills.slice(0, 4).join(', ')}, and more.`,
        `Meharvir has experience with ${resumeData.skills.slice(0, 3).join(', ')} and other technologies.`
      ];
      return getRandomResponse(skillResponses);
    }
    
    // Education
    if (/\b(education|study|school|college|university|degree|graduate|qualification)\b/.test(query)) {
      const educationResponses = [
        `Meharvir is a ${resumeData.education}.`,
        `Meharvir studies Computer Science with a focus on web technologies.`,
        `In terms of education, Meharvir is pursuing Computer Science.`
      ];
      return getRandomResponse(educationResponses);
    }
    
    // Experience
    if (/\b(experience|work|job|career|background|history)\b/.test(query) && !(/\breact\b/.test(query))) {
      const experienceResponses = [
        `Meharvir's experience includes: ${resumeData.experience.join('; ')}.`,
        `Professionally, Meharvir has ${resumeData.experience[0].toLowerCase()} and ${resumeData.experience[1].toLowerCase()}.`,
        `Meharvir has worked on web development projects and music production.`
      ];
      return getRandomResponse(experienceResponses);
    }
    
    // Interests
    if (/\b(interest|hobby|passion|enjoy|like|love|free time)\b/.test(query)) {
      const interestResponses = [
        `Meharvir is interested in: ${resumeData.interests.join(', ')}.`,
        `Outside of work, Meharvir enjoys ${resumeData.interests[1]} and ${resumeData.interests[2]}.`,
        `Meharvir is passionate about ${resumeData.interests[0]} and ${resumeData.interests[1]}.`
      ];
      return getRandomResponse(interestResponses);
    }
    
    // Contact
    if (/\b(contact|email|reach|connect|get in touch|call|phone)\b/.test(query)) {
      return `You can contact Meharvir at: ${resumeData.contact}`;
    }
    
    // Game
    if (/\b(game|play|fun|entertain|easter egg)\b/.test(query)) {
      return `There's a game you can play! Click on the gamepad icon in the navigation bar to play Tic Tac Toe.`;
    }

    // Music
    if (/\b(music|production|song|audio|sound|track)\b/.test(query)) {
      const musicResponses = [
        `Meharvir is passionate about music production. He creates digital music and has experience with audio engineering tools.`,
        `Music production is one of Meharvir's creative outlets, complementing his technical skills in development.`,
        `Meharvir combines his technical and creative sides through music production and sound engineering.`
      ];
      return getRandomResponse(musicResponses);
    }
    
    // Strengths
    if (/\b(strength|quality|attribute|excel|good at|strong suit|best at)\b/.test(query)) {
      const strengthResponses = [
        `Meharvir's key strengths include ${resumeData.strengths.join(', ')}.`,
        `Professionally, Meharvir excels at ${resumeData.strengths[0]} and ${resumeData.strengths[1]}.`,
        `Meharvir brings ${resumeData.strengths[2]} and ${resumeData.strengths[3]} to his projects.`
      ];
      return getRandomResponse(strengthResponses);
    }
    
    // Career goals
    if (/\b(goal|aim|aspire|future|plan|career|ambition)\b/.test(query)) {
      const goalResponses = [
        `Meharvir aims to further develop his skills in web development and create meaningful digital experiences.`,
        `Career-wise, Meharvir is focused on growing as a full-stack developer while pursuing creative projects.`,
        `Meharvir's professional goals include mastering modern web technologies and building innovative applications.`
      ];
      return getRandomResponse(goalResponses);
    }
    
    // Challenge handling
    if (/\b(challenge|difficult|problem|solve|obstacle|issue)\b/.test(query)) {
      const challengeResponses = [
        `When facing challenges, Meharvir takes a methodical approach to break down problems into manageable components.`,
        `Meharvir sees challenges as opportunities to learn and grow, approaching them with persistence.`,
        `Meharvir tackles difficult problems by researching solutions, testing hypotheses, and iterating on solutions.`
      ];
      return getRandomResponse(challengeResponses);
    }
    
    // Deadline management
    if (/\b(deadline|time management|pressure|stress|manage time|schedule)\b/.test(query)) {
      return getRandomResponse(resumeData.deadlineManagement);
    }
    
    // Why web development
    if (/why.*(\bweb\b|\bdevelopment\b|\bdev\b|\bcode\b|\bprogram\b)/.test(query) || /\bchose\b|\bchoose\b|\bchoos(ing)?\b/.test(query)) {
      return getRandomResponse(resumeData.webdevChoice);
    }
    
    // What makes unique/different
    if (/\b(unique|special|different|stand out|apart from|distinguish)\b/.test(query) || /\bmakes you\b/.test(query)) {
      return getRandomResponse(resumeData.uniqueQualities);
    }

    // Fallback response
    const fallbackResponses = [
      "I don't have specific information about that. Try asking about Meharvir's skills, education, experience, projects, or interests!",
      "I'm not sure about that. Would you like to know about Meharvir's technical skills or project experience instead?",
      "I don't have details on that. Perhaps I can tell you about Meharvir's education or professional background?"
    ];
    return getRandomResponse(fallbackResponses);
  };

  // Helper to get random response from options
  const getRandomResponse = (options) => {
    return options[Math.floor(Math.random() * options.length)];
  };

  return (
    <div className="resume-chat-container">
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle resume chat"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment'}`}></i>
      </button>
      
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>Resume Chat</h3>
          <button className="close-btn" onClick={toggleChat}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.sender === 'bot' && 
                <div className="avatar">
                  <i className="fas fa-robot"></i>
                </div>
              }
              <div className="message-content">
                <p>{message.text}</p>
              </div>
              {message.sender === 'user' && 
                <div className="avatar user">
                  <i className="fas fa-user"></i>
                </div>
              }
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="avatar">
                <i className="fas fa-robot"></i>
              </div>
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="suggested-questions">
          <p className="question-heading">Sample Questions:</p>
          {suggestedQuestions.map((question, index) => (
            <button 
              key={index} 
              className="question-btn" 
              onClick={() => handleSuggestedQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
        
        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask about skills, experience, education..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={isTyping}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeChat; 