import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/VAIBHAV-25" data-show-count="true" aria-label="Follow @VaibhavSinghvi on GitHub">Follow @VaibhavSinghvi</GitHubButton></div>
                </div>

                <div class="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://www.linkedin.com/in/vaibhav-singhvi-b31333159/" style={{color: "#65b6f0"}}>Vaibhav Singhvi</a>
                </div>

            </footer>
        );
    }
}

export default Footer;