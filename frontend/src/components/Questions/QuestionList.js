// src/components/Questions/QuestionList.js
import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../../api/api';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetchQuestions();
      setQuestions(response.data);
    };
    getQuestions();
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.questionId}>{question.questionString}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
