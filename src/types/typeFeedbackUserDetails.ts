export interface Messages {
    msg: string,
    created_at: string,
}

export interface UserMessage {
    message: string,
    date: string,
}

interface FeedbackUserData {
    name: string,
    surname: string,
    phone: string,
    email: string,
}
export interface FeedbackUserDetails extends FeedbackUserData {
    messages: UserMessage[]
}
export interface ResponseUserDetails extends FeedbackUserData {
    messages: Messages[]
}