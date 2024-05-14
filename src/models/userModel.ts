import mongoose from 'mongoose';

enum UserType {
    ANONYMOUS = 'ANONYMOUS',
    STAFF = 'STAFF',
    HOD = 'HOD',
    MASTER = 'MASTER',
    ADMIN = 'ADMIN',
}

enum DesignationType {
    NONE = 'NONE',
    ASSOCIATE_PROFESSOR = 'ASSOCIATE_PROFESSOR',
    ASSISTANT_PROFESSOR = 'ASSISTANT_PROFESSOR',
    PROFESSOR = 'PROFESSOR',
}

enum FormStatusType {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

enum StatusType {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    BANNED = 'BANNED',
}

enum HrEvaluation {
    NOTSUBMITTED = 'NOTSUBMITTED',
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

enum GenderType {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
}

enum PublicationIndexingSource {
    NONE = 'NONE',
    SCI = 'SCI',
    SCOPUS = 'SCOPUS',
    WOS = 'WOS',
}

enum DepartmentType {
    NONE = 'NONE',
    CSE = 'CSE',
    ECE = 'ECE',
    EEE = 'EEE',
    MECH = 'MECH',
    IT = 'IT',
    AIDS = 'AIDS',
    AIML = 'AIML',
    CCE = 'CCE',
    CSBS = 'CSBS',
}

enum SemesterType {
    ODD = 'ODD',
    EVEN = 'EVEN',
    NONE = 'NONE',
}

interface UserSchema {
    username: string;
    email: string;
    password: string;
    role: UserType;
    designation: DesignationType;
    department: DepartmentType;
    phonenumber: string;
    gender: GenderType;
    formstatus: FormStatusType;
    status: StatusType;
    isfirst: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema<UserSchema>({
    username: { type: String, default: '' },
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: Object.values(UserType), default: UserType.ANONYMOUS },
    designation: { type: String, enum: Object.values(DesignationType), default: DesignationType.NONE },
    department: { type: String, enum: Object.values(DepartmentType), default: DepartmentType.NONE },
    phonenumber: { type: String, default: '000-000-0000' },
    gender: { type: String, enum: Object.values(GenderType), default: GenderType.OTHER },
    formstatus: { type: String, enum: Object.values(FormStatusType), default: FormStatusType.PENDING },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.INACTIVE },
    isfirst: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

export default User;
