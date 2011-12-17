package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * User: chris
 * Date: 17/12/2011
 * Time: 00:50
 */
@Controller
public class ContactController {
    
    @RequestMapping(value = "/contact", method = RequestMethod.GET)
    public String showContactUsPage() {
        return "contact";
    }
}
