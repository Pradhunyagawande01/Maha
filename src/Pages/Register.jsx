import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import PixelArt from '../Components/PixelArt';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    role: 'student',
    experience: 'beginner',
    github: '',
    interests: [],
    teamStatus: 'individual',
    teamName: '',
    teamSize: '',
    agreeTerms: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'AI/Machine Learning',
    'AR/VR',
    'IoT',
    'Blockchain',
    'Game Development',
    'Data Science',
    'Cybersecurity'
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      if (checked) {
        setFormData({
          ...formData,
          interests: [...formData.interests, value]
        });
      } else {
        setFormData({
          ...formData,
          interests: formData.interests.filter((interest) => interest !== value)
        });
      }
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server here
    console.log(formData);
    
    // Simulate form submission success
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (submitted) {
    return (
      <div className="screen-on py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="retro-card p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0">
                <PixelArt type="star" size="lg" />
              </div>
              
              <h2 className="font-pixel text-3xl text-cyber-yellow mb-6">REGISTRATION COMPLETE!</h2>
              <p className="text-xl mb-4">Thank you for registering for Hack4Maha!</p>
              <p className="mb-8">
                We've sent a confirmation email to <span className="text-cyber-teal">{formData.email}</span>. 
                Please check your inbox (and spam folder) for further instructions.
              </p>
              
              <div className="text-left mb-8 bg-space-light/50 p-6 rounded">
                <h3 className="font-pixel text-neon-pink text-xl mb-4">NEXT STEPS:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyber-yellow mr-2">1.</span>
                    <span>Join our Discord community to connect with other participants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-yellow mr-2">2.</span>
                    <span>Check out resources and starter kits on our GitHub repository</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-yellow mr-2">3.</span>
                    <span>Start thinking about project ideas and potential teammates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-yellow mr-2">4.</span>
                    <span>Mark your calendar for our pre-hackathon workshops</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/hack4maha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="arcade-btn"
                >
                  Join Discord
                </a>
                <a 
                  href="/" 
                  className="btn btn-primary border-2 border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10 font-pixel py-2 px-6 transition-all duration-200"
                >
                  Return Home
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Registration</SectionTitle>
          <motion.p 
            className="text-center max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Hack4Maha and be part of an unforgettable hackathon experience. 
            Fill out the form below to secure your spot!
          </motion.p>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-10 -right-10 hidden xl:block">
              <PixelArt type="rocket" size="lg" />
            </div>
            
            <motion.form 
              className="retro-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <div className="mb-8">
                <h3 className="font-pixel text-neon-pink text-lg mb-6">PERSONAL INFORMATION</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="firstName">
                      First Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="lastName">
                      Last Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                      Email <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="institution">
                      Institution/Company <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="role">
                      Role <span className="text-neon-pink">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    >
                      <option value="student">Student</option>
                      <option value="professional">Professional</option>
                      <option value="educator">Educator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-pixel text-neon-pink text-lg mb-6">SKILLS & EXPERIENCE</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="experience">
                      Experience Level <span className="text-neon-pink">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    >
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2" htmlFor="github">
                      GitHub Profile (Optional)
                    </label>
                    <input
                      type="text"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/yourusername"
                      className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-4">
                    Areas of Interest <span className="text-neon-pink">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          id={interest}
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleChange}
                          className="w-4 h-4 accent-cyber-yellow"
                        />
                        <label htmlFor={interest} className="ml-2 text-sm">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-pixel text-neon-pink text-lg mb-6">TEAM INFORMATION</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-4">
                    How are you participating? <span className="text-neon-pink">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="individual"
                        name="teamStatus"
                        value="individual"
                        checked={formData.teamStatus === 'individual'}
                        onChange={handleChange}
                        className="w-4 h-4 accent-cyber-yellow"
                      />
                      <label htmlFor="individual" className="ml-2">
                        As an individual (I'll join a team later)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="team"
                        name="teamStatus"
                        value="team"
                        checked={formData.teamStatus === 'team'}
                        onChange={handleChange}
                        className="w-4 h-4 accent-cyber-yellow"
                      />
                      <label htmlFor="team" className="ml-2">
                        With a team
                      </label>
                    </div>
                  </div>
                </div>
                
                {formData.teamStatus === 'team' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" htmlFor="teamName">
                        Team Name <span className="text-neon-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        required={formData.teamStatus === 'team'}
                        className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2" htmlFor="teamSize">
                        Team Size <span className="text-neon-pink">*</span>
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        required={formData.teamStatus === 'team'}
                        className="w-full bg-space-blue border border-space-border p-3 rounded text-white focus:border-cyber-yellow focus:outline-none"
                      >
                        <option value="">Select team size</option>
                        <option value="2">2 members</option>
                        <option value="3">3 members</option>
                        <option value="4">4 members</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 accent-cyber-yellow"
                    required
                  />
                  <label htmlFor="agreeTerms" className="ml-3">
                    I agree to the <a href="/code-of-conduct" className="text-cyber-teal hover:text-neon-pink">Code of Conduct</a> and 
                    <a href="/terms" className="text-cyber-teal hover:text-neon-pink"> Terms & Conditions</a> of Hack4Maha.
                    <span className="text-neon-pink"> *</span>
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="arcade-btn text-lg py-3 px-10">
                  REGISTER
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;