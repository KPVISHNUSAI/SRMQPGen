// src/components/Questions/QuestionForm.js
import React, { useState } from 'react';
import { createQuestion } from '../../api/api';

const QuestionForm = () => {
  const [questionString, setQuestionString] = useState('');
  const [images, setImages] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [examName, setExamName] = useState('');
  const [unitName, setUnitName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const questionData = {
        questionString,
        images: images.split(',').map(img => img.trim()), // Assuming comma-separated values
        subject,
        subjectCode,
        examName,
        unitName,
      };
      await createQuestion(questionData);
      // Optionally, reset the form or display a success message
    } catch (error) {
      console.error('Failed to create question:', error);
    }
  };

  return (
    <div>
      <h2>Create Question</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={questionString}
          onChange={(e) => setQuestionString(e.target.value)}
          placeholder="Question"
        ></textarea>
        <input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          placeholder="Images (comma-separated URLs)"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <input
          type="text"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          placeholder="Subject Code"
        />
        <input
          type="text"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          placeholder="Exam Name"
        />
        <input
          type="text"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          placeholder="Unit Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default QuestionForm;
