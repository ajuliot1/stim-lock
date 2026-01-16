import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';
import { FeedbackForm } from 'components/feedback-form';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div>
            <section className='full-width-image'>

                {/* Could use this for "Patient use only" kind of disclaimers: */}
                {/* <ContextAlert className="mb-6" /> */}

                <h1 className="mb-4" style={{ fontWeight: '400', fontFamily: 'Inter' }}><b>Ensure Post‑Op Stability</b> with Confidence</h1>
                <p className="mb-6" style={{ fontFamily: 'Inter', fontWeight: '300', paddingLeft: '10vw', paddingRight: '10vw'}}>
                    Stim-Lock devices simplify and protect [name of kind of surgery] procedures, providing peace of mind for clinicians and patients alike.
                </p>

            </section>
            <div className="flex flex-col">

                <div className="overview">
                    <h1 className="mb-4" style={{ fontWeight: '700', fontFamily: 'Inter', color: '#1e1e1ed9'}}>Lock the Lead. Remove the Risk.</h1>
                    <p className="mb-6" style={{ fontFamily: 'Inter', fontWeight: '300', paddingLeft: '10vw', paddingRight: '10vw', maxWidth: '1000px' }}>
                        [This is a short but clear description of how to use the product, allowing those who can't watch a video at the time of scanning this site to see the gist.]
                    </p>

                    <div className='button-container'>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-lg sm:min-w-64" style={{ fontFamily: 'Inter', fontSize: '1rem', marginTop: '20px', width: '100%', height: '52px'}}>
                            See How it Works
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <FeedbackForm />
                </div>

                {/* Could use this for customer reviews: */}
                {/* <section className="flex flex-col gap-4">
                    <Markdown content={preDynamicContentExplainer} />
                    <RandomQuote />
                </section> */}
            </div>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
