export default interface Pensioner {
    
    name: String;
    date_of_birth: String;
    pan: Number;
    aadhaar: Number;
    salary_earned: Number;
    allowences: Number;
    self_family_pension: String;
    bank_detail: {
        bank_name: String;
        account_number: Number;
        public_or_private: String;
    }
}