import { useState, useCallback, useEffect } from "react";
import Profile from "../../Components/Profile";
import ResetPassword from "../../Components/ResetPassword";
import DeleteAccount from "../../Components/DeleteAccount";
import Attention from "../../Components/Attention";
import Rate_Us from "../../Components/Rate_Us";
import PrivacyComponent from "../../Components/PrivacyComponent";

export const ProfileSettingsHook = () => {
  const [profile, setProfile] = useState(true);
  const [resetPassword, setResetPassword] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [attention, setAttention] = useState(false);
  const [rateUs, setRateUs] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  useEffect(() => {}, [
    profile,
    resetPassword,
    deleteAccount,
    attention,
    privacy,
    rateUs,
  ]);

  const settings = useCallback(
    (
      profilePrameter,
      resetPasswordPrameter,
      deleteAccountPrameter,
      attentionPrameter,
      rateUsPrameter,
      privacyPrameter
    ) => {
      setProfile(profilePrameter);
      setResetPassword(resetPasswordPrameter);
      setDeleteAccount(deleteAccountPrameter);
      setAttention(attentionPrameter);
      setRateUs(rateUsPrameter);
      setPrivacy(privacyPrameter);
    },
    []
  );

  const componentsFunction = [
    { condition: profile, component: <Profile /> },
    { condition: resetPassword, component: <ResetPassword /> },
    { condition: deleteAccount, component: <DeleteAccount /> },
    { condition: attention, component: <Attention /> },
    { condition: rateUs, component: <Rate_Us /> },
    { condition: privacy, component: <PrivacyComponent /> },
  ];

  return {
    settings,
    profile,
    resetPassword,
    deleteAccount,
    attention,
    rateUs,
    privacy,
    componentsFunction,
  };
};
