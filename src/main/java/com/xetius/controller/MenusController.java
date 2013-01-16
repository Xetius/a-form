package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MenusController {

    @RequestMapping(value = "/menus", method = RequestMethod.GET)
    public String showPricingPage() {
        return "menus";
    }
}
