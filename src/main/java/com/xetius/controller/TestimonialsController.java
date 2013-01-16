package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestimonialsController {

    @RequestMapping(value = "/testimonials", method = RequestMethod.GET)
    public String showTestimonialsPage() {
        return "testimonials";
    }
}
