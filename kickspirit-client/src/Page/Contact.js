import React, {useEffect} from 'react';

function Contact(){

    useEffect(() => {
        
    }, []);

    return (
        <div classNameName="contact-form">
                <div id="contact">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-8 col-md-offset-2">
                            <h2 className="centered">Contact Form</h2>

                            <form className="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">

                                <div className="form-group">
                                    <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Subject"  data-msg="Please enter at least 8 chars of subject"/>
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                                    <div className="validate"></div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default Contact;