const db = require('../models/index');


exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await db.Question.findAll();
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllQuestionsOfSameSubjectID = async (req, res) => {
    const { subjectId } = req.params;
    try {
        const questions = await db.Question.findAll({
            where: {
                subjectId: subjectId
            }
        });
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions of the same subject ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getQuestionById = async (req, res) => {
    const { id } = req.params;
    try {
        const question = await db.Question.findByPk(id);
        if (question) {
            res.json(question);
        } else {
            res.status(404).json({ message: 'Question not found' });
        }
    } catch (error) {
        console.error('Error fetching question:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createQuestion = async (req, res) => {
    const questionData = req.body;
    try {
        // Check if user is admin
        console.log(req.user.roleId);
        if (req.user.roleId !== 1) {
            return res.status(403).json({ message: 'Only admin users can create questions'});
        }
        
        const newQuestion = await db.Question.create(questionData);
        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ message: 'Failed to create question' });
    }
};


exports.updateQuestion = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        // Check if user is admin
        if (req.user.roleId !== 1) {
            return res.status(403).json({ message: 'Only admin users can update questions' });
        }
        
        const question = await db.Question.findByPk(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        await question.update(updatedData);
        res.json(question);
    } catch (error) {
        console.error('Error updating question:', error);
        res.status(500).json({ message: 'Failed to update question' });
    }
};

exports.deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        // Check if user is admin
        if (req.user.roleId !== 1) {
            return res.status(403).json({ message: 'Only admin users can delete questions' });
        }
        
        const question = await db.Question.findByPk(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        await question.destroy();
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).json({ message: 'Failed to delete question' });
    }
};
