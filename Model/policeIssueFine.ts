import mongoose, {Schema, Model} from "mongoose";

export interface IPoliceIssueFine extends Document {
    civilUserName : string;
    civilNIC : string;
    issueLocation : string;
    vehicalNumber : string;
    date : string;
    time : string;
    isPaid : boolean;
    offence : string;
    policeId : string;
    fineManagementId: string;
    
}

const policeIssueFineSchema: Schema = new Schema<IPoliceIssueFine>({
    civilUserName: { type: String, required: true },
    civilNIC: { type: String, required: true },
    issueLocation: { type: String, required: true },
    date:{type: String, required: true},
    time: { type: String, required: false },
    isPaid : {type: Boolean, requied: true},
    offence: { type: String, required: false },
    policeId: { type: String, required: false },
    fineManagementId: { type: String, required: true },
    vehicalNumber: { type: String, required: false },
});

const policeIssueFine: Model<IPoliceIssueFine> = mongoose.model<IPoliceIssueFine>("PoliceIssueFine", policeIssueFineSchema)

export default policeIssueFine;