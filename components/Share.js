// @flow

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share';

class Share extends React.Component {

    fetchUrl() {
        return "";
    }

    render() {

        return <div>

                <h4>Share me! <span style={{fontSize:12, fontStyle: 'italic', color: '#000'}}>(Coming soon!)</span></h4>
                <div style={{display:'inline-block', marginRight: 5}}>
                <FacebookShareButton url={this.fetchUrl()}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                </div>
                <div style={{display:'inline-block', marginRight: 5}}>
                <LinkedinShareButton url={this.fetchUrl()}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                </div>
                <div style={{display:'inline-block', marginRight: 5}}>
                <TwitterShareButton url={this.fetchUrl()}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                </div>
                <div style={{display:'inline-block', marginRight: 5}}>
                <EmailShareButton url={this.fetchUrl()}><EmailIcon size={32} round={true} /></EmailShareButton>
                </div>
                <hr style={{marginTop:10, marginBottom: 10}}/>
        </div>
    }
}

export default Share