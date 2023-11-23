export interface UserMessage {
    message: string,
    date: string,
}
export interface FeedbackUserDetails {
    name: string,
    surname: string,
    phone: string,
    email: string,
    messages: UserMessage[]
}