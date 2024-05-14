import { Schema, model, Document } from 'mongoose';







const FormSchema = new Schema({
    email:{type: String,required: true},
    form_typ:{
        type: String,
        required:true,
        enum:['ASSOCIATE FORM','ASSISTANT FORM','PROFESSOR FORM','NONE'],
        default:'NONE'
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const FormModel = model('Form', FormSchema);

export default FormModel;