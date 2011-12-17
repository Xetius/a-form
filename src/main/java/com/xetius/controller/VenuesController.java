package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * User: chris
 * Date: 17/12/2011
 * Time: 00:43
 */
@Controller
public class VenuesController {
    @RequestMapping(value = "/venues", method = RequestMethod.GET)
    public String showVenuesPage() {
        return "venues";
    }
}
