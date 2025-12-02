import { useForm, usePage } from '@inertiajs/react';
import soundtrack from '../../../public/images/soundtrack.jpg';
import { formatDistanceToNow } from 'date-fns';

type Props = {
    storeUrl: string;
};

export default function Conversations() {
    const { storeUrl } = usePage().props as unknown as Props;
    const { messages } = usePage().props as unknown as {
        messages: {
            id: number;
            user_id: number;
            message: string;
            created_at: number;
            "user": {
                name: string;
            }
        }[];
    };


    const { data, setData, post } = useForm({
        message: '',
    });

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        post(storeUrl);
    }

    // To-Do
    // Maybe use Header from Welcome. Or make it a separate component to be reused!
    // Needed for registration/login part
    return (
        <div className="mx-auto max-w-2xl">
            <div className="h-100">
                {/* eslint-disable-next-line no-constant-condition */}
                {1 !== 1 ? (
                    <h1 className="mt-8 text-3xl font-bold">
                        Start the conversation, send a message to the mentor!
                    </h1>
                ) : (
                    <h1 className="mt-8 text-3xl font-bold">Latest Messages</h1>
                )}
                {messages.map(message => (
                    <div>
                        <div className="font-semibold">{message.message}</div>
                        <div className="mt-1">By {message.user?.name}</div>
                        <div className="m2 text-sm text-gray-500">{formatDistanceToNow(message.created_at, { addSuffix: true })}</div>
                    </div>
                ))}
            </div>
            <div className="card bg-base-50 h-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mt-4 w-full shadow">
                            <textarea
                                name="message"
                                placeholder="What's on your mind?"
                                className="textarea textarea-bordered w-full resize-none"
                                rows={4}
                                maxLength={255}
                                required
                                value={data.message}
                                onChange={(e) =>
                                    setData('message', e.target.value)
                                }
                            ></textarea>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-full bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <main className="m-3 flex flex-col items-center justify-center">
                <div className="flex h-50 w-200 flex-col items-center justify-center">
                    <div className="flex text-center">Video chat</div>
                    <button className="rounded-full bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700">
                        Start Video
                    </button>
                </div>
                <div className="h-50 w-200">
                    <p className="text-center">Audio messages</p>
                    <img src={soundtrack} alt="A placeholder" />
                </div>
            </main>
        </div>
    );
}
