import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const ResumeBuilderPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetRole: '',
    experience: '',
    skills: '',
    education: '',
    projects: ''
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateResume = async () => {
    setIsLoading(true);
    setSuccess(false);
    
    try {
      // Simulate API call to Gemini
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response from Gemini
      const mockResume = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.targetRole,
        summary: `Experienced ${formData.targetRole} with ${formData.experience.split(',').length} years of professional experience. 
        Skilled in ${formData.skills.split(',').slice(0, 3).join(', ')}.`,
        experience: formData.experience.split(',').map(exp => exp.trim()),
        skills: formData.skills.split(',').map(skill => skill.trim()),
        education: formData.education,
        projects: formData.projects.split('\n').filter(p => p.trim() !== '')
      };
      
      setResumeData(mockResume);
      setSuccess(true);
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Failed to generate resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generatePDF = () => {
    if (!resumeData) return;
    
    const doc = new jsPDF();
    
    // Set font and add title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text(resumeData.name, 105, 20, { align: 'center' });
    
    // Add contact information
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    let contactInfo = resumeData.email;
    if (resumeData.phone) contactInfo += ` | ${resumeData.phone}`;
    doc.text(contactInfo, 105, 28, { align: 'center' });
    
    // Add horizontal line
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Add sections
    let yPosition = 45;
    
    // Professional Summary
    if (resumeData.summary) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('PROFESSIONAL SUMMARY', 20, yPosition);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      const splitText = doc.splitTextToSize(resumeData.summary, 170);
      doc.text(splitText, 20, yPosition + 7);
      yPosition += splitText.length * 7 + 15;
    }
    
    // Work Experience
    if (resumeData.experience?.length > 0) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('WORK EXPERIENCE', 20, yPosition);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      resumeData.experience.forEach((exp, i) => {
        doc.text(`• ${exp}`, 20, yPosition + 7 + (i * 7));
      });
      yPosition += resumeData.experience.length * 7 + 15;
    }
    
    // Skills
    if (resumeData.skills?.length > 0) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('SKILLS', 20, yPosition);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      const skillsText = resumeData.skills.map(skill => `• ${skill}`).join('\n');
      const splitSkills = doc.splitTextToSize(skillsText, 170);
      doc.text(splitSkills, 20, yPosition + 7);
      yPosition += splitSkills.length * 7 + 15;
    }
    
    // Education
    if (resumeData.education) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('EDUCATION', 20, yPosition);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      doc.text(`• ${resumeData.education}`, 20, yPosition + 7);
      yPosition += 15;
    }
    
    // Projects
    if (resumeData.projects?.length > 0) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('PROJECTS', 20, yPosition);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      resumeData.projects.forEach((project, i) => {
        doc.text(`• ${project}`, 20, yPosition + 7 + (i * 7));
      });
    }
    
    // Save the PDF
    doc.save(`${resumeData.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            AI Resume Builder
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill in your details and let AI craft your perfect resume
          </p>
        </div>

        {!resumeData ? (
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                    Professional Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Target Role*</label>
                      <input
                        type="text"
                        name="targetRole"
                        value={formData.targetRole}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Skills* (comma separated)</label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        required
                        placeholder="JavaScript, React, Project Management, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                    Experience & Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Work Experience* (one per line)</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        required
                        placeholder="Frontend Developer at ABC Corp (2020-2023)\nImplemented React components..."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Education*</label>
                      <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        required
                        placeholder="B.S. Computer Science, University of XYZ (2016-2020)"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Projects (one per line)</label>
                      <textarea
                        name="projects"
                        value={formData.projects}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        placeholder="E-commerce Website - Built with React and Node.js\nCRM System - Led development team..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <motion.button 
                className={`px-8 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-md transition-colors ${
                  isLoading || !formData.name || !formData.targetRole 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                whileHover={!isLoading && formData.name && formData.targetRole ? { scale: 1.03 } : {}}
                whileTap={!isLoading && formData.name && formData.targetRole ? { scale: 0.97 } : {}}
                onClick={generateResume}
                disabled={isLoading || !formData.name || !formData.targetRole}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Resume
                  </>
                )}
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="text-gray-800">
                  <h1 className="text-3xl font-bold mb-1">{resumeData.name}</h1>
                  <h2 className="text-xl text-blue-600 mb-2">{resumeData.role}</h2>
                  <div className="flex gap-4 text-sm text-gray-600 mb-6">
                    <span>{resumeData.email}</span>
                    {resumeData.phone && <span>| {resumeData.phone}</span>}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-3 text-blue-600">PROFESSIONAL SUMMARY</h3>
                    <p className="text-gray-700">{resumeData.summary}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-3 text-blue-600">WORK EXPERIENCE</h3>
                    <ul className="space-y-2">
                      {resumeData.experience.map((exp, i) => (
                        <li key={i} className="text-gray-700">• {exp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-3 text-blue-600">SKILLS</h3>
                    <ul className="space-y-2">
                      {resumeData.skills.map((skill, i) => (
                        <li key={i} className="text-gray-700">• {skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-3 text-blue-600">EDUCATION</h3>
                    <p className="text-gray-700">• {resumeData.education}</p>
                  </div>
                  
                  {resumeData.projects.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-3 text-blue-600">PROJECTS</h3>
                      <ul className="space-y-2">
                        {resumeData.projects.map((project, i) => (
                          <li key={i} className="text-gray-700">• {project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Resume is Ready!</h3>
                
                {success && (
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg mb-6">
                    <CheckCircle className="w-5 h-5" />
                    <span>Successfully generated with AI</span>
                  </div>
                )}
                
                <p className="text-gray-600 mb-6">Download your resume or make edits as needed.</p>
                
                <div className="space-y-4">
                  <motion.button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={generatePDF}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </motion.button>
                  
                  <button 
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    onClick={() => setResumeData(null)}
                  >
                    Edit Resume
                  </button>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">AI Suggestions</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Consider adding metrics to quantify your achievements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Your skills match 85% of typical job requirements for this role</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeBuilderPage;