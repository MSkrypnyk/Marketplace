import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";
import { DiscordIcon } from "../../icons/DiscordIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__group">
        <div className="footer__info">
          <Link className="footer__title" to="/">
            <Logo />
          </Link>
          <p className="footer__text">
            NFT marketplace UI created <br /> with Anima for Figma.
          </p>
          <p className="footer__text">Join our community</p>
          <div className="footer__social">
            <Link to="/">
              <DiscordIcon />
            </Link>
            <Link to="/">
              <YoutubeIcon />
            </Link>
            <Link to="/">
              <TwitterIcon />
            </Link>
            <Link to="/">
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div className="footer__info">
          <p className="footer__title">Explore</p>
          <Link to="/" className="footer__text">
            Marketplace
          </Link>
          <Link to="/" className="footer__text">
            Rankings
          </Link>
          <Link to="/" className="footer__text">
            Connect a wallet
          </Link>
        </div>
        <div className="footer__info">
          <p className="footer__title">Join our weekly digest</p>
          <p className="footer__text">
            Get exclusive promotions & updates <br /> straight to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </div>
      <p className="footer__copyright">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};
