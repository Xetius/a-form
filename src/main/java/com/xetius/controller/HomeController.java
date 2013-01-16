package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HomeController {

    @RequestMapping({"/", "/index", "/home", "/about"})
    public String showHomePage() {
        return "home";
    }
}
