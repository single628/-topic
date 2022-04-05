import { observable, action } from "mobx-miniprogram";

export const store=observable({
    // 完成某天的任务对应的分数
    finishedTaskScore:[],
    // 任务对应的具体题目内容
    allTopicList:[],
    // 任务对应具体题目内容的正确答案和解析
    correctAnswerList:{},
    // 答完题后的分数、做题时间等
    topicAnswer:{},
    answerIndex: ['A', 'B', 'C', 'D'],
    // 每天任务的题目内容
    get AllTopicList(){
        return this.allTopicList;
    },
    updateAllTopicList:action(function(value){
        let correctAnswer_temp = [];
        let analysis_temp = [];
        let correctAnswerIndex=[];
        let temp = '';
        for (let i = 0; i < value.length; i++) {
            correctAnswer_temp.push(value[i].topic_answer_content);
            analysis_temp.push(value[i].topic_analysis);
            for (let j = 0; j < 4; j++) {
                temp = value[i].topic_answer_content[j].is_standard_answer;
                if (temp) {
                    let PP = {}, temp2 = correctAnswerIndex;
                    PP[i + ""] = this.answerIndex[j];
                    temp2.push(PP);
                    correctAnswerIndex=temp2;
                    break;
                }
            }
        }
        this.correctAnswerList={'correctAnswer':correctAnswer_temp,'analysis':analysis_temp,'correctAnswerIndex':correctAnswerIndex};
        this.allTopicList=value;
    }),
    // 完成的任务分数
    get FinishedTaskScore(){
        return this.finishedTaskScore;
    },
    updateFinishedTaskScore:action(function(value){
        this.finishedTaskScore = value;
    }),
    get TopicAnswer(){
        return this.topicAnswer;
    },
    updateTopicAnswer:action(function(value){
        this.topicAnswer = value;
    })
})