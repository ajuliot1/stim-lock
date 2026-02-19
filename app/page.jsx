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
console.log("THIS IS RUNNING")
export default function Page() {
    return (
        <div>
            <section className='full-width-image'>


                {/* Could use this for "Patient use only" kind of disclaimers: */}
                {/* <ContextAlert className="mb-6" /> */}

                <h1 className="mb-4" style={{ fontWeight: '400', fontFamily: 'Inter' }}><b>Ensure Post‑Op Stability</b> with Confidence</h1>
                <p className="mb-6" style={{ fontFamily: 'Inter', fontWeight: '300', paddingLeft: '10vw', paddingRight: '10vw'}}>
                    Stim-Lock devices simplify and protect percutaneously implanted neurostimulator  procedures, providing peace of mind for clinicians and patients alike.
                </p>

            </section>
            <div className="flex flex-col">

                <div className="overview">
                    <h1 className="mb-4" style={{ fontWeight: '700', fontFamily: 'Inter', color: '#1e1e1ed9'}}>Lock the Lead. Remove the Risk.</h1>
                    <p className="mb-6" style={{ fontFamily: 'Inter', fontWeight: '300', paddingLeft: '10vw', paddingRight: '10vw', maxWidth: '1000px' }}>
                        Stim‑Lock is a dedicated fixation device engineered to secure percutaneously implanted neurostimulator leads during trial procedures. By maintaining consistent lead stability throughout the trial period, Stim‑Lock supports surgical efficiency and helps ensure a more reliable assessment of therapeutic effectiveness.
                    </p>

                    <div className='button-container'>
                        <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/1166392295?share=copy&fl=sv&fe=ci" className="btn btn-lg sm:min-w-64" style={{ fontFamily: 'Inter', fontSize: '1rem', marginTop: '20px', width: '100%', height: '52px'}}>
                            See How it Works
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <FeedbackForm />
                </div>

                <div className="overview" style={{paddingTop: '0', marginTop: '10px'}}>
                    <h1 className="mb-4" style={{ fontSize: '16px', fontWeight: '700', fontFamily: 'Inter', color: '#1e1e1ed9' }}>DEMONSTRATION DEVICE – NOT FOR PATIENT USE</h1>
                    <p className="mb-6" style={{ fontSize: '13px', fontFamily: 'Inter', fontWeight: '300', paddingLeft: '10vw', paddingRight: '10vw', maxWidth: '1000px' }}>
                        This device sample is provided solely for purposes of demonstration and evaluation by healthcare professionals. It is not labeled for sale and any sale or resale is strictly prohibited. This sample is non-sterile and neither intended nor suitable for clinical use, whether in patient care, diagnosis, treatment, or any therapeutic application. Any use of this device sample outside of its intended demonstration purpose is strictly prohibited and the manufacturer assumes no responsibility for any misuse of this device. The manufacturer disclaims all warranties, express or implied, associated with this sample, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose, and expressly states that this sample has not been registered with the FDA, and has not been prepared, validated, or labeled for patient use. This device is protected by U.S. patent laws, and the manufacturer specifically reserves all associated intellectual property rights. Unauthorized use, reproduction, or replication is prohibited.
                    </p>
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
