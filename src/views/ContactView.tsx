import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { profileData } from '../utils/mockData';
import { toast } from 'react-toastify';

const ContactView = () => {
  const { contactInfo } = profileData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xvgqrnjd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <motion.div
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-blue-400">#</span>
            <span className="text-yellow-500 mx-1">Contact</span>
            <span className="text-white">Information</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-6 font-mono text-sm">
            <span className="text-blue-400">##</span>
            <span className="text-yellow-500 mx-1">Get In Touch</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FaEnvelope className="mr-3 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="mr-3 text-blue-400" />
                  <span>{contactInfo.location}</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <FaGithub className="mr-3 text-blue-400" />
                  <a 
                    href={`https://${contactInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.github}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <FaLinkedin className="mr-3 text-blue-400" />
                  <a 
                    href={`https://${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Availability</h2>
              <p className="text-gray-300">
                Currently open to new opportunities and collaborations in Machine Learning, AI, and related fields.
              </p>
              <div className="mt-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-green-400">Within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4" action="https://formspree.io/f/xvgqrnjd" method="POST">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactView; 