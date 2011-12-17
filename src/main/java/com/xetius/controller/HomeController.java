package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * User: chris
 * Date: 13/12/2011
 * Time: 23:16
 */
@Controller
public class HomeController {

    @RequestMapping({"/", "/index", "/home", "/about"})
    public String showHomePage() {
        return "home";
    }
}
