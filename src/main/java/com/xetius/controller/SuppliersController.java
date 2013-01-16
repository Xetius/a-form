/**
 * Copyright (C) 2004 - 2009 Shopzilla, Inc. 
 * All rights reserved. Unauthorized disclosure or distribution is prohibited.
 */

package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SuppliersController {

    @RequestMapping(value = "/suppliers", method = RequestMethod.GET)
    public String showSuppliersPage() {
        return "suppliers";
    }
}
