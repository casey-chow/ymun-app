package org.caseychow.ymunapp;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.widget.Toolbar;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
//  private Toolbar toolbar;
//  private TabLayout tabLayout;
//  private ViewPager viewPager;
//  private int[] tabIcons = {
//          R.drawable.ic_,
//          R.drawable.ic_tab_call,
//          R.drawable.ic_tab_contacts
//  };

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }
}
