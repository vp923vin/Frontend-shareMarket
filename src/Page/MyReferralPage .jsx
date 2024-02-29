import React, { useState } from 'react';

const MyReferralPage = () => {
    // State to store referral details
    const [referralDetails, setReferralDetails] = useState({
        referralLink: 'https://example.com/referral',
        referralCode: 'ABC123',
        redeemableReferrals: 0,
        usedReferrals: 0,
        totalReferrals: 0,
    });

    // Function to calculate premium subscription based on total referrals
    const calculateSubscription = () => {
        const { totalReferrals } = referralDetails;
        let subscriptionMonths = 0;

        if (totalReferrals >= 75) {
            subscriptionMonths = 12;
        } else if (totalReferrals >= 50) {
            subscriptionMonths = 6;
        } else if (totalReferrals >= 25) {
            subscriptionMonths = 3;
        } else if (totalReferrals >= 10) {
            subscriptionMonths = 1;
        } else if (totalReferrals >= 50) {
            subscriptionMonths = Math.floor(totalReferrals * 0.02);
        }

        return subscriptionMonths;
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">My Referral</h1>
            <div className="bg-white shadow-md rounded-md p-6">
                <p className="mb-4"><span className="font-bold">Referral Link:</span> {referralDetails.referralLink}</p>
                <p className="mb-4"><span className="font-bold">Referral Code:</span> {referralDetails.referralCode}</p>
                <p className="mb-4"><span className="font-bold">Redeemable Referrals:</span> {referralDetails.redeemableReferrals}</p>
                <p className="mb-4"><span className="font-bold">Used Referrals:</span> {referralDetails.usedReferrals}</p>
                <p className="mb-4"><span className="font-bold">Total Referrals:</span> {referralDetails.totalReferrals}</p>
                <p className="font-bold">Premium Subscription:</p>
                <p>{calculateSubscription()} month(s)</p>
            </div>
        </div>
    );
};

export default MyReferralPage;
