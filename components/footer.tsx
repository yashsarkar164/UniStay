import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-foreground-foreground py-12 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="font-bold text-lg text-foreground">UniStay</span>
            </div>
            <p className="text-muted-foreground">Finding the perfect student home made easy.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Browse</h4>
            <ul className="space-y-2">
              <li><Link href="/listings" className="text-muted-foreground hover:text-primary">All PGs</Link></li>
              <li><Link href="/listings?sort=price-low" className="text-muted-foreground hover:text-primary">Budget PGs</Link></li>
              <li><Link href="/listings?sort=rating" className="text-muted-foreground hover:text-primary">Top Rated</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Landlords</h4>
            <ul className="space-y-2">
              <li><Link href="/post-pg" className="text-muted-foreground hover:text-primary">Post Your PG</Link></li>
              <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-primary">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground mb-6">
            © 2025 UniStay. All rights reserved. Made for Assam Downtown University students.
          </p>
          
          <div className="text-center text-sm text-muted-foreground bg-secondary/30 rounded-lg p-4">
            <p className="font-semibold text-foreground mb-2">Built by: BIZMINDS</p>
            <div className="space-y-1">
              <p>Abhinab Nath • ADTU/0/2023-27/BTCS/018</p>
              <p>Yash Sarkar • ADTU/0/2023-27/BTCS/043</p>
              <p>Bungthoi Thoidingjam • ADTU/0/2023-27/BTCS/009</p>
              <p>Akangsha Nath • ADTU/0/2023-27/BTCS/022</p>
              <p>Ashutush Roy • ADTU/0/2023-27/BTCS/046</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
